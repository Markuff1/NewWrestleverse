import "./Shows.css";
import "./Home.css";
import "./Draft.css";
import Header from "./Header";
import Footer from "./Footer";

const championPicks = [
  {
    title: "World Champions",
    raw: "Shawn Michaels",
    smackdown: "Rey Mysterio"
  },
  {
    title: "Women's World Champions",
    raw: "Alexa Bliss",
    smackdown: "Liv Morgan"
  },
  {
    title: "Midcard Champions",
    raw: "Penta",
    smackdown: "Dragon Lee"
  },
  {
    title: "Women's Midcard Champions",
    raw: "Naomi",
    smackdown: "Nikki Bella"
  },
  {
    title: "Tag Team Champions",
    raw: "The Street Profits",
    smackdown: "The New Day"
  }
];

const generalDraftPicks = [
  { pick: 1, raw: "Roman Reigns", smackdown: "Seth Rollins" },
  { pick: 2, raw: "Randy Orton", smackdown: "CM Punk" },

  { pick: 3, raw: "Brock Lesnar", smackdown: "AJ Styles" },
  { pick: 4, raw: "LA Knight", smackdown: "Cody Rhodes" },
  { pick: 5, raw: "Rhea Ripley", smackdown: "Charlotte Flair" },
  { pick: 6, raw: "Gunther", smackdown: "Kevin Owens" },
  { pick: 7, raw: "Bianca Belair", smackdown: "Asuka" },

  { pick: 8, raw: "Drew Mcintyre", smackdown: "Finn Balor" },
  { pick: 9, raw: "Usos", smackdown: "Viking Raiders" },
  { pick: 10, raw: "Becky Lynch", smackdown: "Bayley" },
  { pick: 11, raw: "Blake Monroe", smackdown: "Sol Ruca" },
  { pick: 12, raw: "Bron Breakker", smackdown: "Oba Femi" },

  { pick: 13, raw: "Wade Barrett", smackdown: "Ilja Dragunov" },
  { pick: 14, raw: "Rusev", smackdown: "Rey Fenix" },
  { pick: 15, raw: "Iyo Sky", smackdown: "Jordynne Grace" },
  { pick: 16, raw: "MCMG", smackdown: "MFTs" },
  { pick: 17, raw: "Logan Paul", smackdown: "Sheamus" },

  { pick: 18, raw: "#DIY", smackdown: "Pretty Deadly" },
  { pick: 19, raw: "Aleister Black", smackdown: "Ricky Saints" },
  { pick: 20, raw: "Bronson Reed", smackdown: "Trick Williams" },
  { pick: 21, raw: "Stephane Vaquer", smackdown: "Roxanne Perez" },
  { pick: 22, raw: "Carmelo Hayes", smackdown: "Damian Priest" },

  { pick: 23, raw: "Tiffiany Stratton", smackdown: "Lyra Valkyria" },
  { pick: 24, raw: "Dominik Mysterio", smackdown: "Chad Gable" },
  { pick: 25, raw: "Raquel Roderiques", smackdown: "Chelsea Green" },
  { pick: 26, raw: "Jacob Fatu", smackdown: "Kane" },
  { pick: 27, raw: "Sami Zayn", smackdown: "Joe Hendry" },
];

function Draft() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">

          <img
            className="DraftBanner"
            src="Images/DraftHeader.png"
            alt="Draft Banner"
          />

          <div className="DraftText1">Champions Drafted</div>

          <div className="DraftTableWrapper">
            <table className="DraftTable">
              <thead>
                <tr>
                  <th>Championship</th>
                  <th>
                    Raw
                    <span className="DraftTableSubtext">GM: JBL</span>
                  </th>
                  <th>
                    SmackDown
                    <span className="DraftTableSubtext">GM: Booker T</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {championPicks.map((row) => (
                  <tr key={row.title}>
                    <td className="DraftPickNumber">{row.title}</td>
                    <td className="DraftRaw">{row.raw || "—"}</td>
                    <td className="DraftSmackdown">{row.smackdown || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="DraftText1">General Picks</div>

          <div className="DraftTableWrapper">
            <table className="DraftTable">
              <thead>
                <tr>
                  <th>Pick Number</th>
                  <th>
                    Raw
                    <span className="DraftTableSubtext">GM: JBL</span>
                  </th>
                  <th>
                    SmackDown
                    <span className="DraftTableSubtext">GM: Booker T</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {generalDraftPicks.map((row) => (
                  <tr key={row.pick}>
                    <td className="DraftPickNumber">{row.pick}</td>
                    <td className="DraftRaw">{row.raw || "—"}</td>
                    <td className="DraftSmackdown">{row.smackdown || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Draft;
