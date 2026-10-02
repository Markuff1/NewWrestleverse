import { useEffect } from "react";
import "./WrestlerModal.css";
import { TitleReignSummary } from "./hooks/useTitleHistory";
import { TitleRecords } from "./hooks/useTitleRecords";
import { getTeamNamesForMember, normalizeWrestlerName } from "./RosterData";
import { RosterHometowns } from "./RosterHometowns";
import { royalRumbleWinners } from "./RoyalRumbleWinners";
import { TITLE_ICONS } from "./championships";

export type WrestlerModalProfile = {
  src: string;
  name: string;
  tag?: string;
};

type WrestlerModalProps = {
  profile: WrestlerModalProfile;
  titles: TitleReignSummary[];
  championByAbbrev: Record<string, string>;
  titleRecords: Record<string, TitleRecords>;
  onClose: () => void;
};

// Which show/brand a wrestler is assigned to. Only RAW and Smackdown have a
// logo to show; every other tag falls back to a plain text label.
const BRAND_INFO: Record<string, { label: string; logo?: string }> = {
  R: { label: "RAW", logo: "/Images/RAWLogo.webp" },
  SD: { label: "Smackdown", logo: "/Images/SDLogo.webp" },
  AAA: { label: "AAA" },
  L: { label: "Legends" },
  U: { label: "Undrafted" },
  A: { label: "Alumni" },
};

// Money In The Bank is won, not held as a championship, so the pop-up says
// "Winner" instead of the shared "Champion" label.
const MODAL_TITLE_LABELS: Record<string, string> = {
  RMMITB: "RAW Money In The Bank Winner",
  SDMMITB: "Smackdown Money In The Bank Winner",
  WMITB: "Women's Money In The Bank Winner",
  MMITB: "Men's Money In The Bank Winner",
};

type AccomplishmentEntry = { key: string; icon?: string; text: string };

function AccomplishmentList({ items }: { items: AccomplishmentEntry[] }) {
  if (items.length === 0) {
    return <span className="WrestlerModalValue">None</span>;
  }

  return (
    <ul className="WrestlerModalTitleList">
      {items.map((item) => (
        <li key={item.key}>
          {item.icon && <img className="WrestlerModalTitleIcon" src={item.icon} alt="" />}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function WrestlerModal({ profile, titles, championByAbbrev, titleRecords, onClose }: WrestlerModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const hometown = RosterHometowns[profile.name] || "Unknown";
  const brand = profile.tag ? BRAND_INFO[profile.tag] : undefined;

  // Tag team titles are held under the team's name — treat those as
  // "currently held" for a member too, not just an exact name match.
  const relevantKeys = new Set([
    normalizeWrestlerName(profile.name),
    ...getTeamNamesForMember(profile.name).map(normalizeWrestlerName),
  ]);
  const currentAbbrevs = new Set(
    Object.entries(championByAbbrev)
      .filter(([, holder]) => relevantKeys.has(normalizeWrestlerName(holder)))
      .map(([abbrev]) => abbrev)
  );

  const titleToEntry = (title: TitleReignSummary): AccomplishmentEntry => ({
    key: title.abbrev,
    icon: TITLE_ICONS[title.abbrev],
    text: `${MODAL_TITLE_LABELS[title.abbrev] ?? title.titleName}${title.reigns > 1 ? ` x${title.reigns}` : ""}`,
  });

  // Currently held titles are shown by name only — "x2" would misleadingly
  // read as holding the same title twice at once, rather than this being
  // the wrestler's 2nd reign.
  const currentTitles = titles
    .filter((title) => currentAbbrevs.has(title.abbrev))
    .map((title) => titleToEntry({ ...title, reigns: 1 }));

  const pastTitles = titles
    .map((title) => ({
      ...title,
      reigns: currentAbbrevs.has(title.abbrev) ? title.reigns - 1 : title.reigns,
    }))
    .filter((title) => title.reigns > 0)
    .map(titleToEntry);

  // Royal Rumble wins are an individual accomplishment, not tied to a tag
  // team, so match on the wrestler's own name only. They live alongside
  // past championships under "Past Accomplishments".
  const royalRumbleWins = royalRumbleWinners.filter(
    (win) => normalizeWrestlerName(win.name) === normalizeWrestlerName(profile.name)
  ).length;

  const pastAccomplishments = [...pastTitles];
  if (royalRumbleWins > 0) {
    pastAccomplishments.push({
      key: "royal-rumble",
      icon: "/Images/PPV/RoyalRumble/RRLogo.webp",
      text: `Royal Rumble Winner${royalRumbleWins > 1 ? ` x${royalRumbleWins}` : ""}`,
    });
  }

  // One entry per record this wrestler holds — a title can contribute up to
  // three (longest reign, shortest reign, most reigns). "Most reigns" only
  // counts as a record when someone is actually ahead of a single reign.
  const recordEntries: { key: string; abbrev: string; text: string }[] = [];
  for (const record of Object.values(titleRecords)) {
    if (record.longest && relevantKeys.has(record.longest.holderKey)) {
      recordEntries.push({
        key: `${record.abbrev}-longest`,
        abbrev: record.abbrev,
        text: `Longest Reigning ${record.titleName} (${record.longest.weeks} weeks)`,
      });
    }
    if (record.shortest && relevantKeys.has(record.shortest.holderKey)) {
      recordEntries.push({
        key: `${record.abbrev}-shortest`,
        abbrev: record.abbrev,
        text: `Shortest Reigning ${record.titleName} (${record.shortest.weeks} weeks)`,
      });
    }
    if (
      record.mostReigns &&
      record.mostReigns.count > 1 &&
      record.mostReigns.holderKeys.some((key) => relevantKeys.has(key))
    ) {
      recordEntries.push({
        key: `${record.abbrev}-mostReigns`,
        abbrev: record.abbrev,
        text: `Most ${record.titleName.replace(/ Champion$/, "")} Reigns (${record.mostReigns.count} times)`,
      });
    }
  }

  return (
    <div className="WrestlerModalOverlay" onClick={onClose}>
      <div
        className="WrestlerModalCard"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={profile.name}
      >
        <button className="WrestlerModalClose" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="WrestlerModalImage">
          <img src={profile.src} alt={profile.name} />
        </div>

        <div className="WrestlerModalDetails">
          <h2 className="WrestlerModalName">{profile.name}</h2>

          {brand && (
            <div className="WrestlerModalRow">
              <span className="WrestlerModalLabel">Assigned Show</span>
              {brand.logo ? (
                <img className="WrestlerModalBrandLogo" src={brand.logo} alt={brand.label} />
              ) : (
                <span className="WrestlerModalValue">{brand.label}</span>
              )}
            </div>
          )}

          <div className="WrestlerModalRow">
            <span className="WrestlerModalLabel">Hometown</span>
            <span className="WrestlerModalValue">{hometown}</span>
          </div>

          <div className="WrestlerModalRow WrestlerModalRow--stacked">
            <span className="WrestlerModalLabel">Current Champion(s)</span>
            <AccomplishmentList items={currentTitles} />
          </div>

          <div className="WrestlerModalRow WrestlerModalRow--stacked">
            <span className="WrestlerModalLabel">Past Accomplishments</span>
            <AccomplishmentList items={pastAccomplishments} />
          </div>

          {recordEntries.length > 0 && (
            <div className="WrestlerModalRow WrestlerModalRow--stacked">
              <span className="WrestlerModalLabel">Records</span>
              <ul className="WrestlerModalTitleList">
                {recordEntries.map((entry) => (
                  <li key={entry.key}>
                    {TITLE_ICONS[entry.abbrev] && (
                      <img
                        className="WrestlerModalTitleIcon"
                        src={TITLE_ICONS[entry.abbrev]}
                        alt=""
                      />
                    )}
                    {entry.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WrestlerModal;
