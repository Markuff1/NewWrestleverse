import { useEffect } from "react";
import "./WrestlerModal.css";
import { TitleReignSummary } from "./hooks/useTitleHistory";
import { getTeamNamesForMember, normalizeWrestlerName } from "./RosterData";
import { RosterHometowns } from "./RosterHometowns";
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

function TitleList({ titles }: { titles: TitleReignSummary[] }) {
  if (titles.length === 0) {
    return <span className="WrestlerModalValue">None</span>;
  }

  return (
    <ul className="WrestlerModalTitleList">
      {titles.map((title) => (
        <li key={title.abbrev}>
          {TITLE_ICONS[title.abbrev] && (
            <img
              className="WrestlerModalTitleIcon"
              src={TITLE_ICONS[title.abbrev]}
              alt=""
            />
          )}
          {title.titleName}
          {title.reigns > 1 ? ` x${title.reigns}` : ""}
        </li>
      ))}
    </ul>
  );
}

function WrestlerModal({ profile, titles, championByAbbrev, onClose }: WrestlerModalProps) {
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

  // Currently held titles are shown by name only — "x2" would misleadingly
  // read as holding the same title twice at once, rather than this being
  // the wrestler's 2nd reign.
  const currentTitles = titles
    .filter((title) => currentAbbrevs.has(title.abbrev))
    .map((title) => ({ ...title, reigns: 1 }));
  const pastTitles = titles
    .map((title) => ({
      ...title,
      reigns: currentAbbrevs.has(title.abbrev) ? title.reigns - 1 : title.reigns,
    }))
    .filter((title) => title.reigns > 0);

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
            <TitleList titles={currentTitles} />
          </div>

          <div className="WrestlerModalRow WrestlerModalRow--stacked">
            <span className="WrestlerModalLabel">Past Champion(s)</span>
            <TitleList titles={pastTitles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrestlerModal;
