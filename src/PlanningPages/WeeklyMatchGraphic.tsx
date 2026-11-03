import { useState, type CSSProperties } from "react";
import rosterData, { normalizeWrestlerName } from "../RosterData";
import { TITLE_ICONS } from "../championships";
import { SHOWS, titleLabel, type PlannedMatch, type ShowKind } from "./planData";

// Match image for a planned RAW / Smackdown match. Uses a real graphic from
// /Images/Weekly/<RAW|SD>/<YYYY-MM-DD>/M<n>.webp when one exists; otherwise builds one
// from the competitors' roster photos (anyone not on the roster gets a silhouette).

const ROSTER_BY_NAME = new Map(
  [...rosterData.ALL, ...rosterData["Tag Teams"]].map((w) => [normalizeWrestlerName(w.name), w])
);

type Competitor = { name: string; src?: string };

const findCompetitor = (raw: string): Competitor | null => {
  const name = raw.replace(/\(c\)/gi, "").trim();
  if (!name) return null;
  const found = ROSTER_BY_NAME.get(normalizeWrestlerName(name));
  return found ? { name: found.name, src: found.src || undefined } : { name };
};

/** "A & B vs C" -> [[A, B], [C]]. A side that is itself a roster name (e.g. "Hank & Tank") stays whole. */
function parseSides(competitors: string): Competitor[][] {
  return competitors
    .split(/\s+(?:vs\.?|def\.?)\s+/i)
    .map((side) => {
      const whole = ROSTER_BY_NAME.get(normalizeWrestlerName(side.replace(/\(c\)/gi, "")));
      const names = whole ? [side] : side.split(/\s*&\s*|\s*,\s*|\s+and\s+/i);
      return names.map(findCompetitor).filter((c): c is Competitor => c !== null);
    })
    .filter((side) => side.length > 0);
}

type Props = { show: ShowKind; date: Date; dateKey: string; index: number; match: PlannedMatch };

function WeeklyMatchGraphic({ show, date, dateKey, index, match }: Props) {
  const [useCustom, setUseCustom] = useState(true);

  if (useCustom) {
    return (
      <img
        className="MatchImage"
        src={`/Images/Weekly/${show}/${dateKey}/M${index + 1}.webp`}
        onError={() => setUseCustom(false)}
        alt={match.competitors}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const sides = parseSides(match.competitors);
  // 1-on-1 / tag matches are a face-off (side VS side); 3+ sides drop the VS and show
  // everyone in one grid. Either way, use whichever row count gives the biggest photos.
  const faceOff = sides.length <= 2;
  const groups = sides.length === 0 ? [[{ name: "TBA" }]] : faceOff ? sides : [sides.flat()];
  const { size, rows } = bestPhotoLayout(groups.map((g) => g.length), faceOff ? 12 : 0);

  // Long name lists get smaller text (and may wrap to two lines) rather than being cut off.
  const namesText = sides.map((side) => side.map((c) => c.name).join(" & ")).join(" vs ");
  const style = {
    "--wmg-photo": `${size}cqw`,
    "--wmg-names": `${Math.min(4.2, Math.max(2.4, 150 / Math.max(namesText.length, 1)))}cqw`,
  } as CSSProperties;

  return (
    <div className={`WMG WMG--${show.toLowerCase()}`} style={style} role="img" aria-label={match.competitors}>
      <div className="WMGStreaks" />
      <div className="WMGSpotlight" />

      <div className="WMGTop">
        <img src={SHOWS[show].logo} alt="" className="WMGLogo" />
        <span className="WMGDate">
          {date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
        </span>
      </div>

      <div className="WMGStage">
        {groups.map((group, i) => (
          <div key={i} className="WMGSideWrap">
            {i > 0 && <span className="WMGVs">VS</span>}
            <div className="WMGSide" style={{ "--wmg-cols": Math.ceil(group.length / rows) } as CSSProperties}>
              {group.map((c, j) => <Photo key={`${c.name}-${j}`} competitor={c} />)}
            </div>
          </div>
        ))}
      </div>

      <div className="WMGBanner">
        <div className="WMGNames">
          {sides.length === 0
            ? "TBA"
            : sides.map((side, i) => (
                <span key={i}>
                  {i > 0 && <em> vs </em>}
                  {side.map((c) => c.name).join(" & ")}
                </span>
              ))}
        </div>
        {(match.championship || match.matchType) && (
          <div className="WMGDetails">
            {TITLE_ICONS[match.championship] && <img src={TITLE_ICONS[match.championship]} alt="" />}
            {match.championship && <span className="WMGTitle">{titleLabel(match.championship)}</span>}
            {match.championship && match.matchType && <span className="WMGDot">•</span>}
            {match.matchType && <span>{match.matchType}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

// Space for photos, in cqw (% of the graphic's width): the stage between the logo row and
// the name banner, minus the gaps between photos.
const STAGE_WIDTH = 92;
const STAGE_HEIGHT = 35;
const GAP = 1.2;
const MAX_PHOTO = 26;

/**
 * Photo size and row count that make the photos as big as possible. `groups` are the
 * people per block laid out left to right (each side of a face-off, or one block for
 * everyone); `reserved` is width taken by the VS between them.
 */
function bestPhotoLayout(groups: number[], reserved: number) {
  let best = { size: 0, rows: 1 };
  for (let rows = 1; rows <= 3; rows++) {
    const cols = groups.reduce((n, people) => n + Math.ceil(people / rows), 0);
    const size = Math.min(
      MAX_PHOTO,
      (STAGE_WIDTH - reserved - cols * GAP) / cols,
      (STAGE_HEIGHT - (rows - 1) * GAP) / rows,
    );
    if (size > best.size + 0.01) best = { size, rows };
  }
  return best;
}

function Photo({ competitor }: { competitor: Competitor }) {
  return (
    <div className="WMGPhoto" title={competitor.name}>
      {competitor.src ? (
        <img src={competitor.src} alt={competitor.name} loading="lazy" decoding="async" />
      ) : (
        <svg viewBox="0 0 100 100" className="WMGSilhouette" aria-hidden="true">
          <circle cx="50" cy="36" r="19" />
          <path d="M14 100 C14 72 30 60 50 60 C70 60 86 72 86 100 Z" />
          <text x="50" y="44" textAnchor="middle">?</text>
        </svg>
      )}
    </div>
  );
}

export default WeeklyMatchGraphic;
