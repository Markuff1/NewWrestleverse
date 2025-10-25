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
const matchCard2025: Match[] = [
    { match: "Seth Rollins Def. Kevin Owens", title: "--", type: "Extreme Rules Match" },
    { match: "#DIY (c) Def The New Bloodline", title: "RAW Tag Team Titles", type: "2 Out Of 3 Falls Match" },
    { match: "Oba Femi (c) Def Kane and Umaga", title: "United States Title", type: "Triple Threat Match" },
    { match: "Piper Niven (c) Def Nia Jax", title: "Women's Intercontinetal Title", type: "Normal Match" },
    { match: "New Catch Republic Def. The Dudley Boys (c) and Viking Raiders ", title: "Smackdown Tag Team Titles", type: "Triple Threat Tag Ladder Match" },
    { match: "Raquel Roderiques Def. Sol Ruca (c)", title: "Women's United States Title", type: "Normal Match" },
    { match: "Dragon Lee (c) Def. Je'von Evans", title: "Intercontinental Title", type: "Normal Match" },
    { match: "Naomi (c) Def. Kairi Sane and Becky Lynch and Trish Stratus", title: "Women's World Title", type: "Fatal 4-Way Elimination Match" },
    { match: "CM Punk Def. AJ Styles", title: "--", type: "Normal Match" },
    { match: "Gunther (c) Def. Drew McIntyre", title: "World Heavyweight Title", type: "Normal Match" },
    { match: "Roxanne Perez (c) Def. Charlotte Flair", title: "Women's Undisputed Title", type: "Last Woman Standing - Final Chance" },
    { match: "Roman Reigns Def. Randy Orton (c)", title: "WWE Undisputed Title", type: "Normal Match" }
];

const matchCard2026: Match[] = [
  { "match": "LA Knight Vs Penta", "title": "IC", "type": "Special Guest Ref" },
  { "match": "Aleister Black Vs Kevin Owens", "title": "", "type": "Normal Match" },
  { "match": "Sol Ruca Vs Shayna Baszler", "title": "Women's IC", "type": "Normal Match" },
  { "match": "Sami Zayn Vs Seth Rollins", "title": "MITB", "type": "Ladder Match" },
  { "match": "MCMG Vs New Catch Republic", "title": "Smackdown Tag Team", "type": "Tag Team" },
  { "match": "Ilja Draunov Vs Gunther Vs Sheamus", "title": "US", "type": "Triple Threat" },
  { "match": "Stephanie Vaquer Vs Nikki Bella", "title": "Women's US", "type": "Normal Match" },
  { "match": "Dudley Boys Vs Viking Raides", "title": "Raw Tag Team", "type": "Tag Team" },
  { "match": "Asuka Vs Kairi Sane", "title": "Women's World", "type": "Normal" },
  { "match": "CM Punk Vs Randy Oton", "title": "World Heavyweight", "type": "Normal" },
  { "match": "Iyo Sky Vs Rhea Ripley Vs Charlotte Flair", "title": "Women's Undisputed", "type": "Normal" },
  { "match": "Mark Henry Vs John Cena Vs Roman Reigns Vs Drew McIntyre", "title": "Undisputed", "type": "Fatal 4-way" },
  { "match": "Roman Reigns Def. Randy Orton (c)", "title": "WWE Undisputed Title", "type": "Normal Match" }
];


// ---------- Event Data ----------
const SummerSlamEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/SummerSlam/SummerSlamHeader26.png",
    location: "SoFi Stadium, Los Angeles, CA",
    date: "Saturday, August 8th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/SummerSlam/SummerslamHeader.png",
    location: "Cleveland Browns Stadium, Cleveland, Ohio",
    date: "30th August 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "2025MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="SummerSlam Banner" />

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
            <img
              className="MatchImage"
              src={`/Images/PPV/SummerSlam/${imageFolder}/M${index + 1}.PNG`}
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
function SummerSlam() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {SummerSlamEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SummerSlam;
