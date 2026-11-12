import { useContext, useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { RosterPickContext } from "./rosterPick";
import rosterData from "../RosterData";
import { TITLE_BRANDS, TITLE_ICONS } from "../championships";
import { PARTICIPANT_LABELS, type ParticipantCount } from "../PPVPages/MatchTypeInfo";
import MatchTypeTooltip from "../PPVPages/MatchTypeTooltop";
import {
  PARTICIPANT_OPTIONS,
  TITLE_OPTIONS,
  isFilled,
  matchTypesFor,
  newMatch,
  titleLabel,
  type PlannedMatch,
} from "./planData";

const SEPARATOR = /(\s+vs\.?\s+|\s*&\s*|,\s*)/i;
const SIDE_SEPARATOR = /\s+vs\.?\s+/i;
const TRAILING_SEPARATOR = /(\s+vs\.?|\s*&|\s*,)\s*$/i;

// Sides in a full match of each size; no "vs" is added after the last one.
const MAX_SIDES: Partial<Record<ParticipantCount, number>> = { "2": 2, "3": 3, "4": 4, "2T": 2 };

type IsTeam = (name: string) => boolean;

/**
 * What goes after `value` (which ends in a name just added) so the next name can go straight in:
 * " & " while a team is still being made up, " vs " to start the next side, or "" once the match is full.
 * A tag team's own name is a whole side. In a team match a side of wrestlers is 2 (or as many as the
 * first side); with the size on "Any" it mirrors the first side, so "A & B vs C" gets an " & ".
 */
function nextSeparator(value: string, participants: ParticipantCount | "", isTeam: IsTeam) {
  const members = (side: string) => side.split(/\s*&\s*|,\s*/).map((n) => n.trim()).filter(Boolean);
  const sides = value.split(SIDE_SEPARATOR);
  const first = members(sides[0]);
  const current = members(sides[sides.length - 1]);

  let teamSize = 1;
  if (participants === "2T" || participants === "3T") {
    teamSize = sides.length > 1 && !first.some(isTeam) ? Math.max(2, first.length) : 2;
  } else if (participants === "" && sides.length > 1 && !first.some(isTeam)) {
    teamSize = first.length;
  }

  if (!current.some(isTeam) && current.length < teamSize) return " & ";
  if (sides.length >= (MAX_SIDES[participants || "5+"] ?? Infinity)) return "";
  return " vs ";
}

/** Adds `name` after what's typed (keeping a typed separator: "A & " + "B" -> "A & B"), then the next separator. */
function appendCompetitor(value: string, name: string, participants: ParticipantCount | "", isTeam: IsTeam) {
  let next: string;
  if (!value.trim()) next = name;
  else if (TRAILING_SEPARATOR.test(value)) next = value.replace(/\s*$/, " ") + name;
  else next = `${value.trimEnd()}${nextSeparator(value.trimEnd(), participants, isTeam) || " vs "}${name}`;
  return next + nextSeparator(next, participants, isTeam);
}

// ---------- Editable card ----------

type PlanCardProps = {
  title: ReactNode;
  meta: ReactNode;
  variant: "raw" | "sd" | "ppv";
  initial: PlannedMatch[];
  /** Roster tag listed first in the name suggestions ("R" / "SD"); omit for PPVs. */
  rosterTag?: string;
  /** Shown beside the match count until the card is edited (e.g. where the matches came from). */
  note?: string;
  onSave: (matches: PlannedMatch[]) => Promise<void>;
  /** Pass both to open/close cards together (e.g. a week's RAW + Smackdown); otherwise the card manages it itself. */
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
};

/** One show's match card, collapsed to its header until clicked. Edits save automatically shortly after you stop typing. */
export function PlanCard({ title, meta, variant, initial, rosterTag, note, onSave, ...props }: PlanCardProps) {
  const [matches, setMatches] = useState<PlannedMatch[]>(initial);
  const [ownExpanded, setOwnExpanded] = useState(false);
  const expanded = props.expanded ?? ownExpanded;
  const setExpanded = props.onExpandedChange ?? setOwnExpanded;

  // A RAW / Smackdown card only offers that brand's titles plus the shared ones; PPVs offer every title.
  const titleOptions = useMemo(
    () => (rosterTag ? TITLE_OPTIONS.filter((t) => (TITLE_BRANDS[t.abbr] ?? rosterTag) === rosterTag) : TITLE_OPTIONS),
    [rosterTag],
  );
  const [status, setStatus] = useState<"" | "pending" | "saving" | "saved" | "error">("");

  const onSaveRef = useRef(onSave);
  useEffect(() => { onSaveRef.current = onSave; });

  const pending = useRef<PlannedMatch[] | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const flush = useRef(async () => {
    window.clearTimeout(timer.current);
    const toSave = pending.current;
    if (!toSave) return;
    pending.current = null;
    setStatus("saving");
    try {
      await onSaveRef.current(toSave);
      if (!pending.current) setStatus("saved");
    } catch {
      setStatus("error");
    }
  }).current;

  // Save anything still waiting when the card goes away (e.g. switching PPV cycle or year).
  useEffect(() => () => { flush(); }, [flush]);

  const update = (next: PlannedMatch[]) => {
    setMatches(next);
    pending.current = next;
    setStatus("pending");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(flush, 800);
  };

  const updateMatch = (id: string, changes: Partial<PlannedMatch>) =>
    update(matches.map((m) => (m.id === id ? { ...m, ...changes } : m)));

  // Changing the participant count clears a match type that no longer fits it.
  const changeParticipants = (match: PlannedMatch, participants: ParticipantCount | "") => {
    const keepType = matchTypesFor(participants).includes(match.matchType);
    updateMatch(match.id, { participants, ...(keepType ? {} : { matchType: "" }) });
  };

  const moveMatch = (index: number, offset: number) => {
    const next = [...matches];
    [next[index], next[index + offset]] = [next[index + offset], next[index]];
    update(next);
  };

  const filledCount = matches.filter(isFilled).length;
  const statusText = { "": "", pending: "Editing…", saving: "Saving…", saved: "Saved", error: "Save failed" }[status];

  return (
    <article className={`PlanCard PlanCard--${variant}${expanded ? "" : " is-collapsed"}`}>
      {/* A div, not <header>: PPVShow.css gives every <header> a high z-index.
          Clicking it toggles the card, except on a link in the title (e.g. the PPV's page). */}
      <div
        className="PlanCardHeader"
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={(e) => { if (!(e.target as HTMLElement).closest("a")) setExpanded(!expanded); }}
        onKeyDown={(e) => {
          if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
      >
        <div className="PlanCardTitle">
          {title}
          <span className="PlanCardChevron" aria-hidden="true">&#9662;</span>
        </div>
        <div className="PlanCardMeta">
          <span>{meta}</span>
          <span className={`PlanCardStatus PlanCardStatus--${status}`}>
            {statusText || `${filledCount} match${filledCount === 1 ? "" : "es"}${note ? ` · ${note}` : ""}`}
          </span>
        </div>
      </div>

      {expanded && (
        <>
          <table className="PlanTable">
            <colgroup>
              <col className="PlanColNum" />
              <col className="PlanColMatch" />
              <col className="PlanColParticipants" />
              <col className="PlanColType" />
              <col className="PlanColTitle" />
              <col className="PlanColActions" />
            </colgroup>
            <thead>
              <tr>
                <th>No</th>
                <th>Match</th>
                <th>Size</th>
                <th>Type</th>
                <th>Title</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => {
                const participants = match.participants ?? "";
                const typeOptions = matchTypesFor(participants);
                // Keep an older/unlisted saved value visible rather than silently blanking it.
                if (match.matchType && !typeOptions.includes(match.matchType)) typeOptions.unshift(match.matchType);

                return (
                  <tr key={match.id}>
                    <td className="PlanNum">#{index + 1}</td>
                    <td>
                      <CompetitorInput
                        value={match.competitors}
                        rosterTag={rosterTag}
                        participants={participants}
                        onChange={(competitors) => updateMatch(match.id, { competitors })}
                      />
                    </td>
                    <td>
                      <select
                        className="PlanInput"
                        value={participants}
                        onChange={(e) => changeParticipants(match, e.target.value as ParticipantCount | "")}
                        title="Number of participants"
                      >
                        <option value="">Any</option>
                        {PARTICIPANT_OPTIONS.map((count) => (
                          <option key={count} value={count}>{PARTICIPANT_LABELS[count]}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <div className="PlanCellRow">
                        <select
                          className="PlanInput"
                          value={match.matchType}
                          onChange={(e) => updateMatch(match.id, { matchType: e.target.value })}
                        >
                          <option value="">—</option>
                          {typeOptions.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                        {match.matchType && <MatchTypeTooltip matchType={match.matchType} />}
                      </div>
                    </td>
                    <td>
                      <div className="PlanCellRow">
                        {TITLE_ICONS[match.championship] && (
                          <img src={TITLE_ICONS[match.championship]} alt="" className="PlanTitleIcon" />
                        )}
                        <select
                          className="PlanInput"
                          value={match.championship}
                          onChange={(e) => updateMatch(match.id, { championship: e.target.value })}
                        >
                          <option value="">—</option>
                          {/* Keep a saved title that isn't offered here (another brand's, or a title name from a PPV page) as-is. */}
                          {match.championship && !titleOptions.some((t) => t.abbr === match.championship) && (
                            <option value={match.championship}>{titleLabel(match.championship)}</option>
                          )}
                          {titleOptions.map((t) => <option key={t.abbr} value={t.abbr}>{t.label}</option>)}
                        </select>
                      </div>
                    </td>
                    <td className="PlanActions">
                      <button onClick={() => moveMatch(index, -1)} disabled={index === 0} aria-label="Move up">&#9650;</button>
                      <button onClick={() => moveMatch(index, 1)} disabled={index === matches.length - 1} aria-label="Move down">&#9660;</button>
                      <button
                        className="PlanActions--danger"
                        onClick={() => update(matches.filter((m) => m.id !== match.id))}
                        aria-label="Remove match"
                      >
                        &#10005;
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button className="PlanAddRow" onClick={() => update([...matches, newMatch()])}>+ Add match</button>
        </>
      )}
    </article>
  );
}

// ---------- Competitors box ----------

const TAG_BADGES: Record<string, string> = { R: "RAW", SD: "SD", AAA: "AAA", L: "Legend", U: "Undrafted", A: "Alumni" };

// Everyone pickable as a competitor: this show's brand first, then the rest of the roster and active tag teams.
function useCompetitorNames(rosterTag?: string) {
  return useMemo(() => {
    const people = [...rosterData.ALL, ...rosterData["Tag Teams"].filter((team) => !team.disbanded)];
    return people
      .map((w) => ({ name: w.name, tag: w.tag ?? "", isTeam: Boolean(w.members) }))
      .sort((a, b) => Number(b.tag === rosterTag) - Number(a.tag === rosterTag) || a.name.localeCompare(b.name));
  }, [rosterTag]);
}

type CompetitorInputProps = {
  value: string;
  rosterTag?: string;
  participants: ParticipantCount | "";
  onChange: (v: string) => void;
};

/**
 * Free-text competitors box that autocompletes the name currently being typed (the part after the last
 * "vs" / "&" / ","). Picking a name (here or from the roster panel) adds the next " vs " / " & " for you;
 * one left dangling at the end is dropped when you leave the box.
 */
function CompetitorInput({ value, rosterTag, participants, onChange }: CompetitorInputProps) {
  const names = useCompetitorNames(rosterTag);
  const rosterPick = useContext(RosterPickContext);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);

  const isTeam = useMemo(() => {
    const teams = new Set(names.filter((n) => n.isTeam).map((n) => n.name.toLowerCase()));
    return (name: string) => teams.has(name.toLowerCase());
  }, [names]);

  const inputRef = useRef<HTMLInputElement>(null);
  const latest = useRef({ value, onChange, participants, isTeam });
  useEffect(() => { latest.current = { value, onChange, participants, isTeam }; });

  const parts = value.split(SEPARATOR);
  const current = parts[parts.length - 1].trim().toLowerCase();
  const suggestions = current
    ? names.filter((n) => n.name.toLowerCase().includes(current) && n.name.toLowerCase() !== current).slice(0, 8)
    : [];

  const pick = (name: string) => {
    const next = [...parts.slice(0, -1), name].join("");
    onChange(next + nextSeparator(next, participants, isTeam));
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setHighlight((h) => (h + 1) % suggestions.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setHighlight((h) => (h - 1 + suggestions.length) % suggestions.length); }
    else if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); pick(suggestions[highlight].name); }
    else if (e.key === "Escape") setOpen(false);
  };

  return (
    <div className="PlanAutocomplete">
      <input
        ref={inputRef}
        className="PlanInput"
        placeholder="Cody Rhodes vs Drew McIntyre"
        value={value}
        onChange={(e) => { onChange(e.target.value); setOpen(true); setHighlight(0); }}
        onFocus={() => {
          setOpen(true);
          rosterPick?.setTarget((name) => {
            const { value, onChange, participants, isTeam } = latest.current;
            onChange(appendCompetitor(value, name, participants, isTeam));
            inputRef.current?.focus(); // so a dangling separator still gets tidied on blur
          });
        }}
        onBlur={() => {
          setOpen(false);
          if (TRAILING_SEPARATOR.test(value)) onChange(value.replace(TRAILING_SEPARATOR, ""));
        }}
        onKeyDown={onKeyDown}
      />
      {open && suggestions.length > 0 && (
        <ul className="PlanSuggestions" role="listbox">
          {suggestions.map((s, i) => (
            <li
              key={`${s.name}-${s.isTeam}`}
              role="option"
              aria-selected={i === highlight}
              className={i === highlight ? "is-active" : ""}
              onMouseDown={(e) => { e.preventDefault(); pick(s.name); }}
              onMouseEnter={() => setHighlight(i)}
            >
              <span>{s.name}</span>
              <span className="PlanSuggestionTag">{s.isTeam ? "Team" : TAG_BADGES[s.tag] ?? ""}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
