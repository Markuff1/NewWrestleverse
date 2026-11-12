import "./PPVShow.css";
import Header from "./Header";
import Footer from "./Footer";
import MatchTypeTooltip from "./PPVPages/MatchTypeTooltop";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { matchAnchorId, yearAnchorId } from "./PPVPages/ppvAnchors";
import type { TimelineEntry } from "./PPVPages/ppvPages";
import { matchParticipants, participantsOf, resultOf } from "./matchParticipants";
import { titleAbbrev } from "./titleNames";
import { MITB_COLLECTIONS, TITLE_CHAMPION_LABELS, TITLE_ICONS } from "./championships";

// ---------- Types ----------
export type Match = {
  match: string; // the card line shown on the page
  title?: string;
  score?: string;
  type: string;
  night?: number;
  /**
   * Optional: everyone in the match, by roster name. For big matches, so `match` can stay
   * short ("Liv Morgan Wins Women's Money In The Bank") and the superstar circles / Recent
   * Matches still pick everyone up. Without it, names are read from `match`.
   */
  participants?: string[];
  /** Optional: who won, by roster name (use with `participants`). Without it, read from "X Def. Y". */
  winner?: string;
};

export type PPVEvent = {
  year: number;
  banner: string;
  location: string;
  date: string;
  matches: Match[];
  imageFolder: string;
};

type PPVShowProps = {
  events: PPVEvent[];
  bannerAlt: string;
};

// ---------- Helpers ----------
const stripChampionship = (title?: string) => {
  if (!title) return "-";

  return title
    .replace(/\bChampionships?\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};

type Neighbours = Record<number, { previous?: TimelineEntry; next?: TimelineEntry }>;

/**
 * The PPVs before / after each of this page's years, worked out from every PPV page's
 * dates (PPV_TIMELINE in PPVPages/ppvPages.ts) — nothing to keep up to date by hand.
 * Loaded with a dynamic import: ppvPages imports every PPV page, and each page imports
 * this file, so a static import would be circular.
 */
function useNeighbouringPPVs(events: PPVEvent[]) {
  const [neighbours, setNeighbours] = useState<Neighbours>({});

  useEffect(() => {
    let cancelled = false;
    import("./PPVPages/ppvPages").then(({ PPV_PAGES, neighbouringPPVs }) => {
      const page = PPV_PAGES.find((p) => p.events === events);
      if (cancelled || !page) return;
      setNeighbours(Object.fromEntries(events.map((e) => [e.year, neighbouringPPVs(page.link, e.year)])));
    });
    return () => { cancelled = true; };
  }, [events]);

  return neighbours;
}

// Above this many people in a match, the chips show photos only (names on hover).
const MAX_NAMED_PARTICIPANTS = 4;

/** Everyone in a match (photo + name), along the left under the image; each opens that superstar on the roster page. */
function MatchParticipants({ match }: { match: Match }) {
  const participants = participantsOf(match);
  if (participants.length === 0) return null;
  const compact = participants.length > MAX_NAMED_PARTICIPANTS;

  return (
    <ul
      className={`MatchParticipants${compact ? " MatchParticipants--compact" : ""}`}
      aria-label="Superstars in this match"
    >
      {participants.map((p) => (
        <li key={p.name}>
          <Link
            to={`/Roster?superstar=${encodeURIComponent(p.name)}`}
            className={`MatchParticipant${p.isTeam ? " MatchParticipant--team" : ""}`}
            title={compact ? p.name : undefined}
            aria-label={`View ${p.name} on the roster`}
          >
            <span className="MatchParticipantPhoto">
              <img src={p.src} alt="" loading="lazy" decoding="async" />
            </span>
            {!compact && <span className="MatchParticipantName">{p.name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * The right-hand result panel under a match: the title on the line (belt + what happened to
 * it) and the winner. A finished match is written "<winners> Def. <losers>", with "(c)" on
 * the champion — so a champion on the winning side "Retained", otherwise it's a "New
 * Champion". Matches still written "A Vs B" show just the title, if there is one.
 */
function MatchResult({ match }: { match: Match }) {
  const titleText = !match.score && match.title?.replace(/^-+$/, "").trim();
  const abbr = titleAbbrev(titleText || "");
  const sides = resultOf(match);
  if (!titleText && !sides) return null;

  const isBriefcase = abbr in MITB_COLLECTIONS;
  const titleName = abbr
    ? `${TITLE_CHAMPION_LABELS[abbr].replace(/ Champion$/, "")}${isBriefcase ? "" : " Championship"}`
    : titleText;
  // Only a recognised title gets a status — "Number 1 Contendership" isn't won or retained.
  const status =
    sides && abbr
      ? isBriefcase
        ? { text: "Wins the briefcase", kind: "new" }
        : /\(c\)/i.test(sides.winners)
          ? { text: "Retained", kind: "retained" }
          : { text: "New Champion", kind: "new" }
      : null;

  const winners = sides ? matchParticipants(sides.winners) : [];
  const winnerText = winners.length
    ? winners.map((w) => w.name).join(" & ")
    : sides?.winners.replace(/\(c\)/gi, "").trim();
  const plural = winners.length > 1 || winners[0]?.isTeam;

  return (
    <div className="MatchResult">
      {titleText && (
        <div className="MatchResultRow">
          {abbr && TITLE_ICONS[abbr] && <img className="MatchResultBelt" src={TITLE_ICONS[abbr]} alt="" />}
          <div className="MatchResultText">
            <span className="MatchResultLabel">{sides ? "Title" : "On the line"}</span>
            <span className="MatchResultValue">{titleName}</span>
            {status && (
              <span className={`MatchResultStatus MatchResultStatus--${status.kind}`}>{status.text}</span>
            )}
          </div>
        </div>
      )}

      {sides && (
        <div className="MatchResultRow">
          <div className="MatchResultText">
            <span className="MatchResultLabel">{plural ? "Winners" : "Winner"}</span>
            <span className="MatchResultValue">{winnerText}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Component ----------
function PPVShow({ events, bannerAlt }: PPVShowProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const neighbours = useNeighbouringPPVs(events);
  const targetId = decodeURIComponent(location.hash.replace("#", ""));

  const goToMatch = (id: string) => navigate({ hash: `#${encodeURIComponent(id)}` });

  // =========================================================
  // HASH SCROLLING
  // =========================================================
  // The page scrolls inside .PageContainer, not the window, so that's what gets scrolled.
  const containerRef = useRef<HTMLDivElement>(null);
  // Arriving on the page jumps straight to the target (before it's painted); moving around
  // within the page (match table rows, links back to this page) glides there instead.
  const arrivedRef = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const behavior: ScrollBehavior = arrivedRef.current ? "smooth" : "auto";
    arrivedRef.current = true;

    const hash = decodeURIComponent(
      location.hash.replace("#", "")
    );

    // No hash = top of page
    if (!hash) {
      container.scrollTo({ top: 0, behavior });
      return;
    }

    const element = document.getElementById(hash);

    if (!element) return;

    const scrollToElement = () => {
      // Land just below the fixed header (which sits over the top of the container),
      // with a little breathing room.
      const containerTop = container.getBoundingClientRect().top;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const gap = Math.max(0, headerBottom - containerTop) + 16;

      const y =
        element.getBoundingClientRect().top -
        containerTop +
        container.scrollTop -
        gap;

      // Already (nearly) there — don't restart a glide that's in progress.
      if (Math.abs(container.scrollTop - y) < 2) return;
      container.scrollTo({ top: y, behavior });
    };

    scrollToElement();

    // Banners and match images load lazily and push the page down as they arrive, so keep
    // re-aiming at the target whenever a year's section changes size — for a few seconds,
    // or until the user scrolls themselves (then they're in charge).
    const observer = new ResizeObserver(scrollToElement);
    Array.from(container.children).forEach((section) => observer.observe(section));

    const userEvents = ["wheel", "touchstart", "keydown", "mousedown"] as const;
    const stop = () => {
      observer.disconnect();
      window.clearTimeout(timer);
      userEvents.forEach((type) => window.removeEventListener(type, stop));
    };
    const timer = window.setTimeout(stop, 4000);
    userEvents.forEach((type) => window.addEventListener(type, stop, { passive: true }));

    return stop;
  }, [location]);

  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer" ref={containerRef}>
          {events.map((event, eventIndex) => (
            <section
              key={event.year}
              className="PPVEventSection"
            >
              {/* Banner */}
              <img
                id={yearAnchorId(bannerAlt, event.year)}
                className="PPVBanner"
                src={event.banner}
                alt={bannerAlt}
                loading={eventIndex === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              {/* Navigation — the PPV before / after this one, across every PPV page */}
              <div className="PPVNavButtonPlacement">
                {neighbours[event.year]?.previous && (
                  <Link
                    className="PPVNavButton"
                    to={neighbours[event.year].previous!.href}
                    title={`Previous: ${neighbours[event.year].previous!.label}`}
                    aria-label={`Previous PPV: ${neighbours[event.year].previous!.label}`}
                  >
                    ←
                  </Link>
                )}

                <div className="PPVInfo">
                  <strong>Location:</strong> {event.location}
                </div>

                <div className="PPVInfo">
                  <strong>Date/Time:</strong> {event.date}
                </div>

                {neighbours[event.year]?.next && (
                  <Link
                    className="PPVNavButton"
                    to={neighbours[event.year].next!.href}
                    title={`Next: ${neighbours[event.year].next!.label}`}
                    aria-label={`Next PPV: ${neighbours[event.year].next!.label}`}
                  >
                    →
                  </Link>
                )}
              </div>

              {/* Match Card Table */}
              <div className="MCTitle">MATCH CARD</div>

              <table className="MCList">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Match</th>

                    <th>
                      {event.matches.some((m) => m.score)
                        ? "Score"
                        : "Title"}
                    </th>

                    <th>Match Type</th>
                  </tr>
                </thead>

                <tbody>
                  {event.matches.map((match, i) => {
                    const showNightHeader =
                      match.night &&
                      (i === 0 ||
                        match.night !==
                          event.matches[i - 1].night);

                    return (
                      <Fragment key={i}>
                        {showNightHeader && (
                          <tr
                            key={`night-${i}`}
                            className="NightRow"
                          >
                            <td colSpan={4}>
                              Night {match.night}
                            </td>
                          </tr>
                        )}

                        {/* Clicking a row jumps to that match in the summary below. */}
                        <tr
                          className="MCRow"
                          role="link"
                          tabIndex={0}
                          title="Go to this match"
                          onClick={() => goToMatch(matchAnchorId(bannerAlt, event.year, i))}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") goToMatch(matchAnchorId(bannerAlt, event.year, i));
                          }}
                        >
                          <td>{i + 1}</td>

                          <td>{match.match}</td>

                          <td>
                            {match.score
                              ? match.score
                              : stripChampionship(
                                  match.title
                                )}
                          </td>

                          <td>{match.type}</td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>

              {/* Match Card Summary */}
              <div className="MCTitle">
                MATCH CARD SUMMARY
              </div>

              <div className="MatchImages">
                {event.matches.map((match, i) => {
                  const showNightHeader =
                    match.night &&
                    (i === 0 ||
                      match.night !==
                        event.matches[i - 1].night);

                  return (
                    <div key={i}>
                      {showNightHeader && (
                        <h2 className="MCTitle">
                          Night {match.night}
                        </h2>
                      )}
                      

                      <div
                        id={matchAnchorId(bannerAlt, event.year, i)}
                        className={`MatchItem${
                          targetId === matchAnchorId(bannerAlt, event.year, i) ? " is-targeted" : ""
                        }`}
                      >
                        <h3 className="MatchTitle">
                            {match.match}
                        </h3>

                        <div className="MatchInfo">
                          {match.score && (
                            <h4 className="MatchChampionship">
                              Score : {match.score}
                            </h4>
                          )}

                          {!match.score &&
                            match.title && (
                              <h4 className="MatchChampionship">
                                Title : {match.title}
                              </h4>
                            )}

                          <h4 className="MatchType">
                            Match Type : {match.type}{" "}
                            <MatchTypeTooltip
                              matchType={match.type}
                            />{" "}
                          </h4>
                        </div>

                        <img
                          className="MatchImage"
                          src={`/Images/PPV/${event.imageFolder}/M${
                            i + 1
                          }.webp`}
                          alt={match.match}
                          loading="lazy"
                          decoding="async"
                        />

                        {/* Who's in it (left) and how it ended (right) */}
                        <div className="MatchFooter">
                          <MatchParticipants match={match} />
                          <MatchResult match={match} />
                        </div>

                        <div className="MatchDivider" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PPVShow;