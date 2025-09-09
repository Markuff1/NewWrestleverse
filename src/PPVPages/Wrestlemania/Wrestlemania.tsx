import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function Backlash() {
  const matchCard = [
    { match: "Sheamus Def. Jey Uso", title: "US Title", type: "Singles Match" },
    { match: "Piper Niven Def. Chelsea Green", title: "Women's IC", type: "Singles Match" },
    { match: "Dudley Boys Def. AOP", title: "SD Tag", type: "Tag Team Match" },
    { match: "Sol Ruca Def. Jade Cargill", title: "Women's US", type: "Singles Match" },
    { match: "Andrade Def. Jacob Fatu and Je'von Evans", title: "IC Title", type: "Triple Threat" },
    { match: "Kairi Sane Def. Liv Morgan", title: "Women's World", type: "Singles Match" },
    { match: "#DIY Def. Street Profits", title: "RAW Tag", type: "Tag Team Match" },
    { match: "Kevin Owens Def. Seth Rollins", title: "Men's World", type: "Singles Match" },
    { match: "Roxanne Perez Def. Charlotte Flair", title: "Women's Undisputed", type: "Singles Match" },
    { match: "Randy Orton Def. CM Punk", title: "Men's Undisputed", type: "Singles Match" },
  ];

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/Images/PPV/Backlash/BacklashHeader.png"
            alt="Backlash Banner"
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
                  src={`/Images/PPV/Backlash/2025MC/M${index + 1}.PNG`}
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

export default Backlash;
