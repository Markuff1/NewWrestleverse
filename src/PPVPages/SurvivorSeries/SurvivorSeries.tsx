import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function SurvivorSeries() {
  const matchCard = [
    { match: "Umaga Vs ???? (Seth Rollins)", Score: "0 : 1", type: "Normal"},		
    { match: "#DIY Def. New Catch Republic", Score: "1 : 1", type: "Normal"},
    { match: "Raquel Rodriques Def. Michelle McCool", Score: "1 : 2", type: "Normal"},
    { match: "Bron Breakker Def. Damian Priest", Score: "2 : 2", type: "Normal"},
    { match: "Team RAW Def. Team Smackdown", Score: "3 : 2", type: "5 on 5 Elimination"},
    { match: "Rhea Ripley Def. Tiffany Stratton", Score: "3 : 3", type: "Normal"},
    { match: "Roman Reigns Def. Cody Rhodes", Score: "4 : 3", type: "Normal"}
      
  ];

  // Function to scroll to match image
  const scrollToMatch = (index: number) => {
    const element = document.getElementById(`match-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/src/Images/PPV/SurvivorSeries/SurvivorSeriesHeader.png"
            alt="SurvivorSeries Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong>  TD Garden, Boston, Massachusetts
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, 22nd November
            </div>
          </div>

          <div className="MCTitle">Match Card</div>
          <table className="MCList">
            <thead>
              <tr>
                <th>Match Number</th>
                <th>Match</th>
                <th>Score (RAW:SD)</th>
                <th>Match Type</th>
              </tr>
            </thead>
            <tbody>
              {matchCard.map((match, index) => (
                <tr key={index} onClick={() => scrollToMatch(index)} style={{ cursor: "pointer" }}>
                  <td>{index + 1}</td>
                  <td>{match.match}</td>
                  <td>{match.Score}</td>
                  <td>{match.type} Match</td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div className="MCTitle">Match Card Summary</div>
          <div className="MatchImages">
            {matchCard.map((match, index) => (
              <div key={index} className="MatchItem" id={`match-${index}`}>
                <h3 className="MatchTitle">{match.match}</h3>
                <h3 className="MatchChampionship">{match.Score}</h3>
                <h3 className="MatchType">{match.type} match</h3>
                <img
                  className="MatchImage"
                  src={`src/Images/PPV/SurvivorSeries/2025MC/M${index + 1}.png`}
                  alt={match.match}
                />
                <div className="MatchDivider"></div>
              </div>
            ))}
          </div>
          <div className="MatchDivider">--</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SurvivorSeries;
