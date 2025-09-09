import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function CyberSunday() {
  const matchCard = [
    {match: "New Catch Republic (c) Def. Dudley Boys", title: "SmackDown Tag Team Championships", type: "Tables"},
    {match: "Randy Orton Def. Sami Zayn", title: null, type: "Extreme Rules"},
    {match: "Bron Breakker Def. Oba Femi", title: "United States Championship", type: "Last Man Standing"},
    {match: "Michelle McCool Def. Piper Niven (c)", title: "Women's Intercontinental Championship", type: "Extreme Rules"},
    {match: "Damian Priest Def. Baron Corbin (c) and Dragon Lee and Ilja Dragunov and Rey Mysterio", title: "Intercontinental Championship", type: "Ladder"},
    {match: "Rhea Ripley Def. Naomi (c)", title: "Women's World Championship", type: "Normal"},
    {match: "CM Punk Def. AJ Styles", title: null, type: "Ambulance"},
    {match: "Tiffiany Stratton Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Extreme Rules"},
    {match: "Roman Reigns (c) Def. RVD", title: "WWE Undisputed Championship", type: "Normal"},
    {match: "Cody Rhoads (c) Def. Gunther and Drew McIntyre", title: "World Heavyweight Championship", type: "Triple Threat"}
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
            src="/src/Images/PPV/CyberSunday/CyberSundayHeader.png"
            alt="CyberSunday Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Capital One Arena, Washington, DC
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, October 25th 2025
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
                <tr key={index} onClick={() => scrollToMatch(index)} style={{ cursor: "pointer" }}>
                  <td>{index + 1}</td>
                  <td>{match.match}</td>
                  <td>{match.title}</td>
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
                <h3 className="MatchChampionship">{match.title}</h3>
                <h3 className="MatchType">{match.type} match</h3>
                <img
                  className="MatchImage"
                  src={`src/Images/PPV/CyberSunday/2025MC/M${index + 1}.png`}
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

export default CyberSunday;
