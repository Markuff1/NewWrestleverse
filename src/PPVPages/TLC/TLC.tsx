import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function TLC() {
  const matchCard = [
  { match: "Bron Breakker (c) Def. Axiom and Wes Lee and Karrion Kross", title: "US Title", type: "Ladder Match" },
  { match: "AOP Def. New Catch Republic (c)", title: "SD Tag Title", type: "Tables Match" },
  { match: "The Fiend Def. Dominic Mysterio", title: null, type: "Extreme Rules" },
  { match: "Tiffany Stratton (c) Def. Bayley", title: "Women's World", type: "Ladder Match" },
  { match: "JD McDonagh Def. Damian Priest (c) and Jacob Fatu", title: "IC Title", type: "Chairs Match" },
  { match: "Stephanie Vaquer Def. Chelsea Green", title: null, type: "Normal Match" },
  { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed", type: "TLC Match" },
  { match: "Rhea Ripley (c) Def. Jade Cargill (Liv Morgan Cash In)", title: "Women's Undisputed", type: "Chair Match" },
  { match: "Seth Rollins Def. Cody Rhodes (c)", title: "World Heavyweight", type: "TLC Match" }

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
            src="/src/Images/PPV/TLC/TLCHeader.png"
            alt="TLC Banner"
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
                  src={`src/Images/PPV/TLC/2025MC/M${index + 1}.png`}
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

export default TLC;
