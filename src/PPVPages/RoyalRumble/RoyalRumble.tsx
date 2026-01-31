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
  { match: "30 Woman Royal Rumble Match", title: "Wrestlemania Championship Match", type: "Royal Rumble Match" },
  { match: "Seth Rollins Vs Kevin Owens", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Alexa Bliss Vs Nia Jax", title: "Women's World Championship", type: "Normal Match" },
  { match: "Roman Reigns Vs The Fiend", title: "WWE Undisputed Championship", type: "Extreme Rules Match" },
  { match: "30 Man Royal Rumble Match", title: "Wrestlemania Championship Match", type: "Royal Rumble Match" },
];

const matchCard2026: Match[] = [
  { match: "30 Woman Royal Rumble Match - Jade Cargill Won", title: "Wrestlemania Championship Match", type: "Royal Rumble" },
  { match: "Shawn Spears Def. JD McDonugh(c) and Ilja Dragunov", title: "IC Title", type: "Triple Threat" },
  { match: "Axiom(c) Def. Bron Breakker", title: "US Title", type: "Normal" },
  { match: "Stephanie Vaquer Def. Tiffany Stratton(c) and Nia Jax", title: "Women's Undisputed", type: "Triple Threat" },
  { match: "Seth Rollins(c) Def. Rey Mysterio", title: "World Heavyweight", type: "Normal" },
  { match: "Liv Morgan(c) Def. Rhea Ripley", title: "Women's World", type: "Normal" },
  { match: "30 Man Royal Rumble Match - The Rock Won", title: "Wrestlemania Championship Match", type: "Royal Rumble" },
  { match: "Roman Reigns(c) Def. John Cena", title: "WWE Undisputed", type: "Normal" }
];


// ---------- Event Data ----------
const RREvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/RoyalRumble/RoyalRumbleHeader2027.png",
    location: "Kingdom Arena, Riyadh, Saudi Arabia",
    date: "Saturday, January 30th 2026, 2pm ET / 11am PT",
    matches: matchCard2027,
    imageFolder: "RoyalRumble/2027MC",
  },

  {
    year: 2026,
    banner: "/Images/PPV/RoyalRumble/RoyalRumbleHeader2026.png",
    location: "Wembly Stadium, London, England",
    date: "Saturday, January 31st 2025, 2pm ET / 11am PT",
    matches: matchCard2026,
    imageFolder: "RoyalRumble/2026MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="RR Banner" />

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
function RoyalRumble() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {RREvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoyalRumble;