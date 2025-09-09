import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function ONS() {
  const matchCard = [
    { match: "CM Punk Def. Roman Reigns", title: "Number 1 Contendership", type: "Extreme Rules"},	
    { match: "Oba Femi (C) Def. Sheamus ", title: "US Title", type: "2 Out Of 3 Falls"},			
    { match: "Piper Niven (C) Def. Chelsea Green", title: "WIC Title", type: "Table Match"},		
    { match: "Fatal 5 way for the IC Title", title: "IC Title", type: "Ladder Match"},		
    { match: "#DIY (C) Def. New Bloodline", title: "RAW Tag Team Titles", type: "Steel Cage"},		
    { match: "Cody Rhodes Def. Jacob Fatu", title: "--", type: "Extreme Rules"},		
    { match: "Naomi Def. Kairi Sane (C)", title: "Women's World Title", type: "Extreme Rules"},		
    { match: "Drew McIntyre (C) Def. Kevin Owens and Seth Rollins", title: "World Heavyweight Title", type: "3-Way Elimination"},		
    { match: "Roxanne Perez Def. Charlotte Flair (C)", title: "Women's Undisputed Title", type: "Extreme Rules"},		
    { match: "Randy Orton (C) Def. Wade Barrett and Umaga", title: "WWE Undisputed Title", type: "3-Way Elimination"},		
  ];

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/Images/PPV/ONS/ONSHeader.png"
            alt="ONS Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Wells Fargo Center, Philadelphia, Pennsylvania
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, July 26th, 2025
            </div>
          </div>

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
              {matchCard.map((match, index) => (
                <tr key={index}>
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
                  src={`/Images/PPV/ONS/2025MC/M${index + 1}.PNG`}
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

export default ONS;
