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

const matchCard2027: Match[] = [
  { match: "Penta Vs LA Knight", title: "Intercontinental", type: "Normal" },
  { match: "Shayna Baszler Vs Bianca Belair", title: "Women's IC", type: "Normal Match" },
  { match: "Dudley Boys Vs Viking Raiders", title: "Raw Tag Team", type: "Normal Match" },
  { match: "Sheamus Vs AJ Styles Vs Bronson Reed Vs Sami Zayn", title: "United States", type: "Normal Match" },
  { match: "Nikki Bella Vs Natayla", title: "Women's US", type: "Normal Match" },
  { match: "CM Punk Vs Gunther", title: "", type: "Last Man Standing Match" },
  { match: "Raquel Roderiques Vs Rhea Ripley", title: "Women's Undisputed", type: "Normal Match" },
  { match: "Seth Rollins Vs Randy Orton", title: "World Heavyweight", type: "Extreme Rules Match" },
  { match: "Alexa Bliss Vs Kairi Sane", title: "Women's World", type: "Normal Match" },
  { match: "Roman Regins Vs The Fiend", title: "Undisputed", type: "Normal Match" },
];


const matchCard2026: Match[] = [
  { match: "Nia Jax Def. Stephanie Vaquer", title: "", type: "Normal" },
  { match: "JD McDonagh (c) Def. Damian Priest", title: "Intercontinental Title", type: "Normal" },
  { match: "Liv Morgan (c) Def. Rhea Ripley", title: "Women's World Title", type: "Normal" },
  { match: "OC Def. #DIY (c)", title: "Raw Tag Team Titles", type: "Normal" },
  { match: "Bron Breakker (c) Def. Axiom", title: "US Title", type: "Normal" },
  { match: "John Cena Def. Logan Paul", title: "", type: "Normal" },
  { match: "MCMG Def. AOP (c)", title: "SD Tag Team Titles", type: "Normal" },
  { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed Title", type: "Steel Cage" },
  { match: "Tiffany Stratton (c) Def. Michelle McCool", title: "Women's Undisputed Title", type: "Normal" },
  { match: "Seth Rollins (c) Def. Cody Rhodes", title: "World Heavyweight Title", type: "Normal" }
];


// ---------- Event Data ----------
const NYREvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/NYR/NYR2027Header.png",
    location: "Allstate Arena , Illinois, Chicago",
    date: "Saturday, January 2nd 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "NYR/2027MC",
  },

  {
    year: 2026,
    banner: "/Images/PPV/NYR/NYR2026Header.png",
    location: "Nationwide Arena, Columbus, Ohio",
    date: "Saturday, January 3rd 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "NYR/2026MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="NYR Banner" />

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
            <th>title</th>
            <th>Match Type</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{match.match}</td>
              <td>{match.title}</td>
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
                ----- {match.title}    -----
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
function NYR() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {NYREvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NYR;
