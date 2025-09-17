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
const matchCard2025: Match[] = [
  { match: "Sheamus Def. Jey Uso", title: "US Title", type: "Singles Match" },
  { match: "Piper Niven Def. Chelsea Green", title: "Women's IC", type: "Singles Match" },
  { match: "Dudley Boys Def. AOP", title: "SD Tag", type: "Tag Team Match" },
  { match: "Sol Ruca Def. Jade Cargill", title: "Women's US", type: "Singles Match" },
  { match: "Andrade Def. Jacob Fatu and Je'von Evans", title: "IC Title", type: "Triple Threat" },
  { match: "Kairi Sane Def. Liv Morgan", title: "Women's World", type: "Singles Match" },
  { match: "#DIY Def. Street Profits", title: "RAW Tag", type: "Tag Team Match" },
  { match: "Kevin Owens Def. Seth Rollins", title: "Men's World", type: "Singles Match" },
  { match: "Roxanne Perez Def. Charlotte Flair", title: "Women's Undisputed", type: "Singles Match" },
  { match: "Randy Orton Def. CM Punk", title: "Men's Undisputed", type: "Singles Match" },
];

const matchCard2026: Match[] = [ 
  { match: "Penta Vs Carmelo Hayes", title: "Intercontinental", type: "Singles Match" },
  { match: "MCMG Vs #DIY", title: "Smackdown Tag Team", type: "Tag Team Match" },
  { match: "Stephanie Vaquer Vs Jade Gargill", title: "Women's United States", type: "Singles Match" },
  { match: "Dominic Mysterio Vs ??? (Abyss)", title: "", type: "Singles Match" },
  { match: "Jordynne Grace Vs Michelle McCool", title: "Women's Intercontinental", type: "Singles Match" },
  { match: "Aliester Black Vs Finn Balor", title: "United States", type: "Singles Match" },
  { match: "AOP Vs Dudley Boys", title: "Raw Tag Team", type: "Tag Team Match" },
  { match: "Becky Lynch Vs Asuka", title: "Women's World", type: "Singles Match" },
  { match: "John Cena Vs Drew McIntyre", title: "WWE Undisputed", type: "Singles Match" },
  { match: "Rhea Ripley Vs Naomi", title: "Women's Undisputed", type: "Singles Match" },
  { match: "CM Punk Vs AJ Styles Vs Kevin Owens", title: "WWE World Heavyweight", type: "Triple Threat Match" },
];


// ---------- Event Data ----------
const backlashEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/Backlash/BacklashHeaderV2.png",
    location: "Gainbridge Fieldhouse, Indianapolis, Indiana",
    date: "Saturday, May 23rd, 2026",
    matches: matchCard2026,
    imageFolder: "2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/Backlash/BacklashHeader.png",
    location: "Allstate Arena, Rosemont, Illinois",
    date: "Saturday, May 24th, 2025",
    matches: matchCard2025,
    imageFolder: "2025MC",
  },
];


// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="Backlash Banner" />

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
            <th>Match</th>
            <th>Title</th>
            <th>Match Type</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
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
          <div key={index} className="MatchItem">
            <h3 className="MatchTitle">{match.match}</h3>
            <img
              className="MatchImage"
              src={`/Images/PPV/Backlash/${imageFolder}/M${index + 1}.PNG`}
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
function Backlash() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {backlashEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Backlash;
