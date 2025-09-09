import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function NYR() {
  const matchCard = [
  { match: "Nia Jax Def. Stephanie Vaquer", title: null, type: "Normal" },
  { match: "JD McDonagh (c) Def. Damian Priest", title: "Intercontinental Title", type: "Normal" },
  { match: "Liv Morgan (c) Def. Rhea Ripley", title: "Women's World Title", type: "Normal" },
  { match: "OC Def. #DIY (c)", title: "Raw Tag Team Titles", type: "Normal" },
  { match: "Bron Breakker (c) Def. Axiom", title: "US Title", type: "Normal" },
  { match: "John Cena Def. Logan Paul", title: null, type: "Normal" },
  { match: "MCMG Def. AOP (c)", title: "SD Tag Team Titles", type: "Normal" },
  { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed Title", type: "Steel Cage" },
  { match: "Tiffany Stratton (c) Def. Michelle McCool", title: "Women's Undisputed Title", type: "Normal" },
  { match: "Seth Rollins (c) Def. Cody Rhodes", title: "World Heavyweight Title", type: "Normal" }


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
            src="/src/Images/PPV/NYR/NYRHeader.png"
            alt="NYR Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Smoothie King Centre, New Orleans, LA
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, December 13th, 2025
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
                  src={`src/Images/PPV/NYR/2025MC/M${index + 1}.png`}
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

export default NYR;
