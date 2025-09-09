import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function MITB() {
  const matchCard = [
    { match: "Liv Morgan Def. Zoey Stark and Lyra Valkiria and Kelani Jordan and Iyo Sky and Sol Ruca", title: "Women's Money in the Bank", type: "Ladder Match"},		
    { match:"Oba Femi Def. Sheamus (c)", title: "US Championship", type: "Singles Match"},	
    { match:"Kairi Sane (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Singles Match"}, 			
    { match:"Rhoades Def. Breakker and Kane and Page and Styles and Gunther and Mysterio and Dragunov", title: "Men's Money in the Bank", type: "Ladder Match"},			
    { match:"Je'von Evans (c) Def. Andrade and Jacob Fatu", title: "IC Championship", type: "Singles Match"},				
    { match:"Charlotte Flair Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Singles Match"},			
    { match:"Randy Orton (c) Def. CM Punk", title: "Men's Undisputed Championship", type: "Singles Match"},			
    { match:"Drew McIntyre Def. Kevin Owens (c) and Seth Rollins", title: "WWE World Heavyweight Championship", type: "Triple Threat Match"},			

  ];

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/Images/PPV/MITB/MITBHeader.png"
            alt="MITB Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Scotiabank Arena, Toronto, Ontario, Canada
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, June 21st, 2025
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
                  src={`/Images/PPV/MITB/2025MC/M${index + 1}.PNG`}
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

export default MITB;
