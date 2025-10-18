import "../../PPVShow.css";
import "../../Home.css";
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
  { match: "Ilja Dragunov Def. Aleister Black(c)", title: "Intercontinental", type: "Normal Match" },
  { match: "Sol Ruca Def. Jordynne Grace(c)", title: "Women's Intercontinental", type: "Normal Match" },
  { match: "Sami Zayn Def. Seth Rollins", title: "", type: "Extreme Rules Match" },
  { match: "Stephanie Vaquer(c) Def. Roxanne Perez", title: "Women's US", type: "Normal Match" },
  { match: "LA Knight(c) Def. Penta", title: "United States", type: "Normal Match" },
  { match: "Auska(c) Def. Dakota Kai", title: "Women's World", type: "Normal Match" },
  { match: "Mark Henry Def. Dominic Mysterio", title: "", type: "Steel Cage Match" },
  { match: "CM Punk Def. AJ Styles(c)", title: "World Heavyweight", type: "Normal Match" },
  { match: "Rhea Ripley(c) Def. Shayna Baszler", title: "Women's Undisputed", type: "Normal Match" },
  { match: "John Cena(c) Def. Drew McIntyre", title: "Undisputed", type: "Normal Match" },

];

// ---------- Event Data ----------
const overthelimitEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/OverTheLimit/OTLHeader2026.png",
    location: "Madison Square Garden, New York",
    date: "Saturday, June 27th 2026",
    matches: matchCard2026,
    imageFolder: "OverTheLimit/2026MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="Over The Limit Banner" />

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
function OverTheLimit() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {overthelimitEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OverTheLimit;
