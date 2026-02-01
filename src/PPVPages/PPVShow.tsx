import "../PPVShow.css";
import Header from "../Header";
import Footer from "../Footer";
import MatchTypeTooltip from "../PPVPages/MatchTypeTooltop";

// ---------- Types ----------
export type Match = {
  match: string;
  title?: string;
  type: string;
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

// ---------- Component ----------
function PPVShow({ events, bannerAlt }: PPVShowProps) {
  return (
    <>
      <Header />

      <div className="PPVBackground">
        <div className="PPVContainer">
          {events.map(event => (
            <section key={event.year}>
              <img
                className="PPVBanner"
                src={event.banner}
                alt={bannerAlt}
              />

              {/* Event Info */}
              <div className="PPVInfo">
                <div className="PPVLocation">
                  <strong>Location:</strong> {event.location}
                </div>
                <div className="PPVDate">
                  <strong>Date/Time:</strong> {event.date}
                </div>
              </div>

              {/* Match Card Table */}
              <div className="MCTitle">Match Card</div>
              <table className="MCList">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Match</th>
                    <th>Title</th>
                    <th>Match Type</th>
                  </tr>
                </thead>
                <tbody>
                  {event.matches.map((match, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{match.match}</td>
                      <td>{stripChampionship(match.title)}</td>
                      <td>{match.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Match Card Summary */}
              <div className="MCTitle">Match Card Summary</div>
              <div className="MatchImages">
                {event.matches.map((match, i) => (
                  <div key={i} className="MatchItem">
                    <h3 className="MatchTitle">{match.match}</h3>

                    {match.title && (
                      <h4 className="MatchChampionship">
                        ----- {match.title} -----
                      </h4>
                    )}

                    <h4 className="MatchType">
                      ----- {match.type}{" "}
                      <MatchTypeTooltip matchType={match.type} /> -----
                    </h4>

                    <img
                      className="MatchImage"
                      src={`/Images/PPV/${event.imageFolder}/M${i + 1}.PNG`}
                      alt={match.match}
                    />

                    <div className="MatchDivider" />
                  </div>
                ))}
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
