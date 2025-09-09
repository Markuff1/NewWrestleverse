import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function NoWayOut() {
  const matchCard = [
    { match: "Sheamus Def. Jey Uso", title: "US Title", type: "Singles Match" },
  ];

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/Images/PPV/NoWayOut/NoWayOutHeader.png"
            alt="NoWayOut Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Allstate Arena, Rosemont, Illinois
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, May 24th, 2025
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
                  src={`/Images/PPV/NoWayOut/2025MC/M${index + 1}.PNG`}
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

export default NoWayOut;
