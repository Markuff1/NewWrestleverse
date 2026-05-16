import "./PPVShow.css";
import Header from "./Header";
import Footer from "./Footer";
import MatchTypeTooltip from "./PPVPages/MatchTypeTooltop";
import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

// ---------- Types ----------
export type Match = {
  match: string;
  title?: string;
  score?: string;
  type: string;
  night?: number;
};

export type EventNavigation = {
  label: string;
  link: string;
};

export type PPVEvent = {
  year: number;
  banner: string;
  location: string;
  date: string;
  matches: Match[];
  imageFolder: string;

  previousEvent?: EventNavigation;
  nextEvent?: EventNavigation;
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

// ---------- Component ----------
function PPVShow({ events, bannerAlt }: PPVShowProps) {
  const location = useLocation();

  // =========================================================
  // HASH SCROLLING
  // =========================================================
  useLayoutEffect(() => {
    const hash = decodeURIComponent(
      location.hash.replace("#", "")
    );

    // No hash = top of page
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    const element = document.getElementById(hash);

    if (!element) return;

    const scrollToElement = () => {
      const headerOffset = 110;

      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: "auto",
      });
    };

    // Multiple corrections because of lazy-loaded images
    setTimeout(scrollToElement, 50);
    setTimeout(scrollToElement, 300);
    setTimeout(scrollToElement, 1000);
  }, [location]);

  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          {events.map((event, eventIndex) => (
            <section
              key={event.year}
              className="PPVEventSection"
            >
              {/* Banner */}
              <img
                id={`${bannerAlt}-${event.year}`}
                className="PPVBanner"
                src={event.banner}
                alt={bannerAlt}
                loading={eventIndex === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              {/* Navigation */}
              <div className="PPVNavButtonPlacement">
                {event.previousEvent && (
                  <Link
                    className="PPVNavButton"
                    to={event.previousEvent.link}
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

                {event.nextEvent && (
                  <Link
                    className="PPVNavButton"
                    to={event.nextEvent.link}
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
                      <>
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

                        <tr key={i}>
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
                      </>
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
                      

                      <div className="MatchItem">
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
                          }.PNG`}
                          alt={match.match}
                          loading="lazy"
                          decoding="async"
                        />

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