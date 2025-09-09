import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function RoyalRumble() {
  const matchCard = [
  { match: "30 Woman Royal Rumble Match - Jade Cargill Won", title: "Wrestlemania Championship Match", type: "Royal Rumble" },
  { match: "Shawn Spears Def. JD McDonugh(c) and Ilja Dragunov", title: "IC Title", type: "Triple Threat" },
  { match: "Axiom(c) Def. Bron Breakker", title: "US Title", type: "Normal" },
  { match: "Stephanie Vaquer Def. Tiffany Stratton(c) and Nia Jax", title: "Women's Undisputed", type: "Triple Threat" },
  { match: "Seth Rollins(c) Def. Rey Mysterio", title: "World Heavyweight", type: "Normal" },
  { match: "Liv Morgan(c) Def. Rhea Ripley", title: "Women's World", type: "Normal" },
  { match: "30 Man Royal Rumble Match - The Rock Won", title: "Wrestlemania Championship Match", type: "Royal Rumble" },
  { match: "Roman Reigns(c) Def. John Cena", title: "WWE Undisputed", type: "Normal" }
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
            src="/src/Images/PPV/RoyalRumble/RoyalRumbleHeader.png"
            alt="RoyalRumble Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Wembly Stadium, London, England
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, 31st January 2026
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
                  src={`src/Images/PPV/RoyalRumble/2025MC/M${index + 1}.png`}
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

export default RoyalRumble;
