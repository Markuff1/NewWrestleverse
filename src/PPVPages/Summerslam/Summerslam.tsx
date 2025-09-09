import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function Summerslam() {
  const matchCard = [
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

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/src/Images/PPV/Summerslam/SummerslamHeader.png"
            alt="Summerslam Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Cleveland Browns Stadium, Cleveland, Ohio
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> 30th August 2025, 7e/5p
            </div>
          </div>

          <div className="MCTitle">Match Card</div>
          <table className="MCList">
            <thead>
              <tr>
                <th>Match Number</th>
                <th>Match</th>
                <th>Title</th>
                <th>Match Type</th>
              </tr>
            </thead>
            <tbody>
              {matchCard.map((match, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{match.match}</td>
                  <td>{match.title}</td>
                  <td>{match.type}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="MCTitle">Match Card Summary</div>
          <div className="MatchImages">
            {matchCard.map((match, index) => (
              <div key={index} className="MatchItem">
                <h3 className="MatchTitle">{match.match}</h3>
                <img
                  className="MatchImage"
                  src={`src/Images/PPV/Summerslam/2025MC/M${index + 1}.png`}
                  alt={match.match}
                />
                <div className="MatchDivider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Summerslam;
