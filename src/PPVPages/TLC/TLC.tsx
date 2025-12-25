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
  { match: "Penta Vs Rob Van Dam Vs Carmelo Hayes", title: "Intercontinental Championship", type: "Ladder Match" },
  { match: "Viking Raiders Vs Dudley Boys", title: "Raw Tag Team Championships", type: "Tables Match" },
  { match: "Shayna Baszler Vs Bianca Belair", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Sheamus Vs Umaga", title: "United States Championship", type: "Chairs Match" },
  { match: "Kairi Sane Vs Alexa Bliss", title: "Womens World Championship", type: "Table Match" },
  { match: "Roman Reigns Vs Oba Femi", title: "WWE Undisputed Championship", type: "TLC Match" },
  { match: "Raquel Roderiques Vs Charlotte Flair", title: "Women's Undisputed Championship", type: "Chairs Match" },
  { match: "The New Day Vs MCMG Vs DIY", title: "SD Tag Team Championships", type: "TLC Triple Threat Tag" },
  { match: "Seth Rollins Vs Randy Orton Vs Rey Mysterio Vs Kevin Owens", title: "World Heavyweigt Championship", type: "TLC Match" }
];

const matchCard2025: Match[] = [
    { match: "Bron Breakker (c) Def. Axiom and Wes Lee and Karrion Kross", title: "US Title", type: "Ladder Match" },
    { match: "AOP Def. New Catch Republic (c)", title: "SD Tag Title", type: "Tables Match" },
    { match: "The Fiend Def. Dominic Mysterio", title: "", type: "Extreme Rules" },
    { match: "Tiffany Stratton (c) Def. Bayley", title: "Women's World", type: "Ladder Match" },
    { match: "JD McDonagh Def. Damian Priest (c) and Jacob Fatu", title: "IC Title", type: "Chairs Match" },
    { match: "Stephanie Vaquer Def. Chelsea Green", title: "", type: "Normal Match" },
    { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed", type: "TLC Match" },
    { match: "Rhea Ripley (c) Def. Jade Cargill (Liv Morgan Cash In)", title: "Women's Undisputed", type: "Chair Match" },
    { match: "Seth Rollins Def. Cody Rhodes (c)", title: "World Heavyweight", type: "TLC Match" }
];


// ---------- Event Data ----------
const TLCEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/TLC/TLC2026Header.png",
    location: "Bell Centre. Montreal, Canada",
    date: "Saturday, December 12th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "TLC/2026MC",
  },

  {
    year: 2025,
    banner: "/Images/PPV/TLC/TLC2025Header.png",
    location: "Smoothie King Centre, New Orleans, LA",
    date: "Saturday, December 13th 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "TLC/2025MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="TLC Banner" />

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
function TLC() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {TLCEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TLC;
