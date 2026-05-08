import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

// ---------- Types ----------
type Match = {
  match: string;
  score?: string;
  title?: string;
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

// ---------- Match Cards -----------

const matchCard2027: Match[] = [
  { match: "CM Punk, Dudley Boys, RVD Vs Seth Rollins, New Day, Ricky Saints", title: "", type: "Wargames" },
  { match: "Sol Ruca Vs Roxanne Perez", title: "Women's United States", type: "Normal" },
  { match: "Ilja Dragunov Vs Oba Femi", title: "United States", type: "Normal" },
  { match: "Usos Vs DIY", title: "RAW Tag Team", type: "Tag Team Match" },
  { match: "Blake Monroe Vs Jaida Parker Vs Lola Vice", title: "Women's Intercontinental", type: "Triple Threat" },
  { match: "Bron Breakker Vs Ethan Page", title: "", type: "Normal" },
  { match: "Logan Paul Open Challenge (Randy Orton)", title: "", type: "Normal" },
  { match: "Ripley, Sky, Vaquer, Belair Vs Lynch, Stratton, Naomi, Nia Jax", title: "", type: "Wargames" },
  { match: "Aleister Black Vs AJ Styles Vs Rey Mysterio Vs Kevin Owens", title: "World Heavyweight", type: "Fatal 4-way" },
  { match: "Charlotte Flair Vs Auska", title: "Women's Undisputed", type: "Normal" },
  { match: "Gunther Vs Brock Lesnar", title: "WWE Undisputed", type: "Extreme Rules" },
];

const matchCard2026: Match[] = [
  { match: "Women's 4 VS 4 Elimination Tag Match", score: "1 : 0", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Penta Vs Sheamus", score: "1 : 1", type: "Normal Match" },
  { match: "Bron Breakker Vs Seth Rollins", score: "1 : 2", type: "Normal Match" },
  { match: "Shayna Baszler Vs Nikki Bella", score: "2 : 2", type: "Normal Match" },
  { match: "Great Khali Vs Ethan Page", score: "3 : 2", type: "Normal Match" },
  { match: "Viking Raiders Vs New Day", score: "3 : 3", type: "Normal Match" },
  { match: "Men's 4 VS 4 Elimination Tag Match", score: "3 : 4", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Raquel Roderiques Vs Kairi Sane", score: "4 : 4", type: "Normal Match" },
  { match: "Roman Reigns Vs Randy Orton", score: "4 : 5", type: "Normal Match" },
];

const matchCard2025: Match[] = [
  { match: "Umaga Vs ???? (Seth Rollins)", score: "0 : 1", type: "Normal" },
  { match: "#DIY Def. New Catch Republic", score: "1 : 1", type: "Normal" },
  { match: "Raquel Rodriques Def. Michelle McCool", score: "1 : 2", type: "Normal" },
  { match: "Bron Breakker Def. Damian Priest", score: "2 : 2", type: "Normal" },
  { match: "Team RAW Def. Team Smackdown", score: "3 : 2", type: "5 on 5 Elimination" },
  { match: "Rhea Ripley Def. Tiffany Stratton", score: "3 : 3", type: "Normal" },
  { match: "Roman Reigns Def. Cody Rhodes", score: "4 : 3", type: "Normal" }
];

// ---------- Event Data ----------
const SurvivorSeriesEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2027.png",
    location: "Petco Park, San Diego, CA",
    date: "Saturday, November 13th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "SurvivorSeries/2027MC",
  },
  {
    year: 2026,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2026.png",
    location: "Enterprise Center, St Louis, Mi",
    date: "Saturday, November 21st 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "SurvivorSeries/2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2025.png",
    location: "TD Garden, Boston, Massachusetts",
    date: "Saturday, November 22nd 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "SurvivorSeries/2025MC",
  },
];

// ---------- Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {

  const showScoreColumn = matches.some(m => m.score);
  const showTitleColumn = !showScoreColumn && matches.some(m => m.title);

  const columnLabel = showScoreColumn ? "Score" : showTitleColumn ? "Title" : "Info";

  return (
    <>
      <img className="PPVBanner" src={banner} alt="Survivor Series Banner" />

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
            <th>{columnLabel}</th>
            <th>Match Type</th>
          </tr>
        </thead>

        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>{match.match}</td>

              <td>
                {showScoreColumn
                  ? (match.score ?? "-")
                  : showTitleColumn
                  ? (match.title ?? "-")
                  : "-"}
              </td>

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

            <h3 className="MatchTitle">{match.match}</h3>

            {match.score && (
              <h4 className="MatchChampionship">
                ----- {match.score} -----
              </h4>
            )}

            {!match.score && match.title && (
              <h4 className="MatchChampionship">
                ----- {match.title} -----
              </h4>
            )}

            <h4 className="MatchType">
              ----- {match.type} -----
            </h4>

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
      <div className="PageBackground">
        <div className="PageContainer">
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