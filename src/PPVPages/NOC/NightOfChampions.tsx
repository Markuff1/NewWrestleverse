import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

// ---------- Types ----------
type Match = {
  match: string;
  title: string;
  type: string;
};

type PPVEvent = {
  year: number;
  banner: string;
  location: string;
  date: string;
  matches: Match[];
  imageFolder: string;
};

// ---------- Match Cards ----------

const matchCard2026: Match[] = [
{ "match": "Drew McIntyre Def. John Cena", "title": "", "type": "Extreme Rules Match" },
{ "match": "Shayna Baszler (c) Def. Sol Ruca", "title": "Women's IC", "type": "Normal Match" },
{ "match": "Sheamus (c) Def. Gunther and Ilja Dragunov", "title": "United States", "type": "Normal Match" },
{ "match": "Viking Raiders (c) Def. Dudley Boys", "title": "Raw Tag Team", "type": "Tag Team Match" },
{ "match": "Nikki Bella Def. Stephanie Vaquer (c)", "title": "Women's US", "type": "Normal Match" },
{ "match": "Seth Rollins Def. Rey Mysterio", "title": "", "type": "Normal Match" },
{ "match": "Penta (c) Def. Cody Rhodes", "title": "Intercontinetal", "type": "Normal Match" },
{ "match": "Kairi Sane (c) Def. Dakota Kai", "title": "Women's World", "type": "Normal Match" },
{ "match": "Roman Reigns Def. Mark Henry (c)", "title": "Undisputed", "type": "Normal Match" },
{ "match": "Raquel Roderiques (c) Def. Iyo Sky and Charlotte Flair", "title": "Women's Undisputed", "type": "Normal Match" },
{ "match": "Randy Orton Def. CM Punk (c)", "title": "World Heavyweight", "type": "Extreme Rules Match" }
];


// ---------- Event Data ----------
const NOCEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/NOC/NOCHeader2026.png",
    location: "American Airlines Center, Dallas, TX",
    date: "Saturday, September 19th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "NOC/2026MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="NOC Banner" />

      {/* Event Info */}
      <div className="PPVInfo">
        <div className="PPVLocation">
          <strong>Location:</strong> {location}
        </div>
        <div className="PPVDate">
          <strong>Date/Time:</strong> {date}
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
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{match.match}</td>
              <td>{match.title || "-"}</td>
              <td>{match.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Match Card Summary */}
      <div className="MCTitle">Match Card Summary</div>
      <div className="MatchImages">
        {matches.map((match, index) => (
          <div key={index} className="MatchItem" id={`match-${index + 1}`}>
            <h3 className="MatchTitle">{`${match.match}`}</h3>
            {match.title && (
              <h4 className="MatchChampionship">
                ----- {match.title} Championship -----
              </h4>
            )}
            <h4 className="MatchType">----- {`${match.type}`} -----</h4>
            <img
              className="MatchImage"
              src={`/Images/PPV/${imageFolder}/M${index + 1}.PNG`}
              alt={match.match}
            />
            <div className="MatchDivider"></div>
          </div>
        ))}
      </div>
    </>
  );
}

// ---------- Main Component ----------
function NOC() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {NOCEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NOC;
