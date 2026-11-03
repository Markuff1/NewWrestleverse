import { useContext, useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { RosterPickContext } from "./rosterPick";
import rosterData from "../RosterData";
import { TITLE_ICONS } from "../championships";
import { PARTICIPANT_LABELS, type ParticipantCount } from "../PPVPages/MatchTypeInfo";
import MatchTypeTooltip from "../PPVPages/MatchTypeTooltop";
import {
  PARTICIPANT_OPTIONS,
  TITLE_OPTIONS,
  isFilled,
  matchTypesFor,
  newMatch,
  type PlannedMatch,
} from "./planData";

const SEPARATOR = /(\s+vs\.?\s+|\s*&\s*|,\s*)/i;

/** "A" + "B" -> "A vs B"; leaves an already-typed separator alone ("A & " + "B" -> "A & B"). */
function appendCompetitor(value: string, name: string) {
  if (!value.trim()) return name;
  if (/(\s+vs\.?|&|,)\s*$/i.test(value)) return value.replace(/\s*$/, " ") + name;
  return `${value.trimEnd()} vs ${name}`;
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
};

/** One show's match card. Edits save automatically shortly after you stop typing. */
export function PlanCard({ title, meta, variant, initial, rosterTag, note, onSave }: PlanCardProps) {
  const [matches, setMatches] = useState<PlannedMatch[]>(initial);
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
    <article className={`PlanCard PlanCard--${variant}`}>
      {/* A div, not <header>: PPVShow.css gives every <header> a high z-index. */}
      <div className="PlanCardHeader">
        <div className="PlanCardTitle">{title}</div>
        <div className="PlanCardMeta">
          <span>{meta}</span>
          <span className={`PlanCardStatus PlanCardStatus--${status}`}>
            {statusText || `${filledCount} match${filledCount === 1 ? "" : "es"}${note ? ` · ${note}` : ""}`}
          </span>
        </div>
      </div>

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
                      {/* A title name from a PPV page that isn't a known title is kept as-is. */}
                      {match.championship && !TITLE_OPTIONS.some((t) => t.abbr === match.championship) && (
                        <option value={match.championship}>{match.championship}</option>
                      )}
                      {TITLE_OPTIONS.map((t) => <option key={t.abbr} value={t.abbr}>{t.label}</option>)}
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

/** Free-text competitors box that autocompletes the name currently being typed (the part after the last "vs" / "&" / ","). */
function CompetitorInput({ value, rosterTag, onChange }: { value: string; rosterTag?: string; onChange: (v: string) => void }) {
  const names = useCompetitorNames(rosterTag);
  const rosterPick = useContext(RosterPickContext);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);

  const latest = useRef({ value, onChange });
  useEffect(() => { latest.current = { value, onChange }; });

  const parts = value.split(SEPARATOR);
  const current = parts[parts.length - 1].trim().toLowerCase();
  const suggestions = current
    ? names.filter((n) => n.name.toLowerCase().includes(current) && n.name.toLowerCase() !== current).slice(0, 8)
    : [];

  const pick = (name: string) => {
    onChange([...parts.slice(0, -1), name].join(""));
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
        className="PlanInput"
        placeholder="Cody Rhodes vs Drew McIntyre"
        value={value}
        onChange={(e) => { onChange(e.target.value); setOpen(true); setHighlight(0); }}
        onFocus={() => {
          setOpen(true);
          rosterPick?.setTarget((name) => latest.current.onChange(appendCompetitor(latest.current.value, name)));
        }}
        onBlur={() => setOpen(false)}
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
