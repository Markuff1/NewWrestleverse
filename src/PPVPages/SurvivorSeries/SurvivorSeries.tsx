import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

// ---------- Types ----------
type Match = {
  match: string;
  Score: string;
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
  { match: "Women's 4 VS 4 Elimination Tag Match", Score: "1 : 0", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Penta Vs Sheamus", Score: "1 : 1", type: "Normal Match" },
  { match: "Bron Breakker Vs Seth Rollins", Score: "1 : 2", type: "Normal Match" },
  { match: "Shayna Baszler Vs Nikki Bella", Score: "2 : 2", type: "Normal Match" },
  { match: "Great Khali Vs Ethan Page", Score: "3 : 2", type: "Normal Match" },
  { match: "Viking Raiders Vs New Day", Score: "3 : 3", type: "Normal Match" },
  { match: "Men's 4 VS 4 Elimination Tag Match", Score: "3 : 4", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Raquel Roderiques Vs Kairi Sane", Score: "4 : 4", type: "Normal Match" },
  { match: "Roman Reigns Vs Randy Orton", Score: "4 : 5", type: "Normal Match" },
];

const matchCard2025: Match[] = [
    { match: "Umaga Vs ???? (Seth Rollins)", Score: "0 : 1", type: "Normal"},		
    { match: "#DIY Def. New Catch Republic", Score: "1 : 1", type: "Normal"},
    { match: "Raquel Rodriques Def. Michelle McCool", Score: "1 : 2", type: "Normal"},
    { match: "Bron Breakker Def. Damian Priest", Score: "2 : 2", type: "Normal"},
    { match: "Team RAW Def. Team Smackdown", Score: "3 : 2", type: "5 on 5 Elimination"},
    { match: "Rhea Ripley Def. Tiffany Stratton", Score: "3 : 3", type: "Normal"},
    { match: "Roman Reigns Def. Cody Rhodes", Score: "4 : 3", type: "Normal"}
];


// ---------- Event Data ----------
const SurvivorSeriesEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/SurvivorSeries/SurvivorSeriesHeader2026.png",
    location: "Enterprise Center, St Louis, Mi",
    date: "Saturday, November 21st 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "SurvivorSeries/2026MC",
  },

  {
    year: 2025,
    banner: "/Images/PPV/SurvivorSeries/SurvivorSeriesHeader2025.png",
    location: "TD Garden, Boston, Massachusetts",
    date: "Saturday, November 22nd 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "SurvivorSeries/2025MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="SurvivorSeries Banner" />

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
            <th>Score</th>
            <th>Match Type</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{match.match}</td>
              <td>{match.Score}</td>
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
            {match.Score && (
              <h4 className="MatchChampionship">
                ----- {match.Score}    -----
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
function SurvivorSeries() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {SurvivorSeriesEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SurvivorSeries;