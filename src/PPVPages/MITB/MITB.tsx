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
    { match: "Liv Morgan Def. Zoey Stark, Lyra Valkiria, Kelani Jordan, Iyo Sky and Sol Ruca", title: "Women's Money in the Bank", type: "Ladder Match"},		
    { match:"Oba Femi Def. Sheamus (c)", title: "US Championship", type: "Singles Match"},	
    { match:"Kairi Sane (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Singles Match"}, 			
    { match:"Rhoades Def. Breakker, Kane, Page, Styles, Gunther, Mysterio and Dragunov", title: "Men's Money in the Bank", type: "Ladder Match"},			
    { match:"Je'von Evans (c) Def. Andrade and Jacob Fatu", title: "IC Championship", type: "Singles Match"},				
    { match:"Charlotte Flair Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Singles Match"},			
    { match:"Randy Orton (c) Def. CM Punk", title: "Men's Undisputed Championship", type: "Singles Match"},			
    { match:"Drew McIntyre Def. Kevin Owens (c) and Seth Rollins", title: "WWE World Heavyweight Championship", type: "Triple Threat Match"},			

];

const matchCard2026: Match[] = [
  { "match": "Raquel Roderiques Won Money in the Bank", "title": "Women MITB", "type": "Ladder" },
  { "match": "Ilja Dragunov (c) Def. Aleister Black and Kevin Owens", "title": "United States Championship", "type": "Singles Match" },
  { "match": "LA Knight (c) Def. Penta", "title": "Intercontinental Championship", "type": "Extreme Rules" },
  { "match": "Auska (c) Def. Nia Jax", "title": "Women's World Championship", "type": "Singles Match" },
  { "match": "Seth Rollins Won Money in the Bank", "title": "Men's MITB", "type": "Ladder" },
  { "match": "CM Punk (c) Def. AJ Styles", "title": "World Heavyweight Championship", "type": "2 Out of 3 Falls" },
  { "match": "Iyo Sky Def. Rhea Ripley (c)", "title": "Women's Undisputed Championship", "type": "Singles Match" },
  { "match": "Mark Henry Def. John Cena (c)", "title": "Undisputed Championship", "type": "Singles Match" }
];

// ---------- Event Data ----------
const MITBEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/MITB/MITBHeaderV2.png",
    location: "T-Mobile Arena, Las Vegas",
    date: "Saturday, July 18th 2026",
    matches: matchCard2026,
    imageFolder: "2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/MITB/MITBHeader.png",
    location: "Scotiabank Arena, Toronto, Canada",
    date: "Saturday, 21st June 2025",
    matches: matchCard2025,
    imageFolder: "2025MC",
  },
];

// ---------- Reusable Component ----------
type PPVSectionProps = PPVEvent;

function PPVSection({ banner, location, date, matches, imageFolder }: PPVSectionProps) {
  return (
    <>
      <img className="PPVBanner" src={banner} alt="MITB Banner" />

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
              src={`/Images/PPV/MITB/${imageFolder}/M${index + 1}.PNG`}
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
function MITB() {
  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          {MITBEvents.map((event) => (
            <PPVSection key={event.year} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MITB;