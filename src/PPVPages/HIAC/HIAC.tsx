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
  { "match": "Raquel Rodrigues Vs Charlotte Flair", "title": "Women's Undisputed", "type": "Hell In A Cell Match" },
  { "match": "Sheamus Vs Gunther", "title": "United States", "type": "Normal Match" },
  { "match": "Nikki Bella Vs Stephanie Vaquer", "title": "Women's US", "type": "Normal Match" },
  { "match": "MCMG Vs New Day", "title": "SD Tag Team", "type": "Tag Team Match" },
  { "match": "Penta Vs Oba Femi", "title": "Intercontinental", "type": "Normal Match" },
  { "match": "Randy Orton Vs CM Punk", "title": "World Heavyweight", "type": "Hell In A Cell Match" },
  { "match": "Kairi Sane Vs Dakota Kai Vs Alexa Bliss", "title": "Women's World", "type": "Triple Threat Match" },
  { "match": "Roman Reigns Vs Mark Henry", "title": "Undisputed", "type": "Hell In A Cell Match" }
];


// ---------- Event Data ----------
const HIACEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/HIAC/HIACHeader2026.png",
    location: "Wells Fargo Center, Philadelphia, PA",
    date: "Saturday, October 24th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "HIAC/2026MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="HIAC Banner" />

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
              <td>{match.title + " Championship" || "-"}</td>
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
function HIAC() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {HIACEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HIAC;
