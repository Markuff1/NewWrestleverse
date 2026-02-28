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
  { pick: 2, raw: "Brock Lesnar", smackdown: "John Cena" },
  { pick: 3, raw: "Randy Orton", smackdown: "AJ Styles" },
  { pick: 4, raw: "Drew Mcintyre", smackdown: "Charlotte Flair" },
  { pick: 5, raw: "Rhea Ripley", smackdown: "CM Punk" },
  { pick: 6, raw: "The Usos", smackdown: "Cody Rhoades" },
  { pick: 7, raw: "Iyo Sky", smackdown: "Dudley Boys" },
  { pick: 8, raw: "LA Knight", smackdown: "Roxanne Perez" },
  { pick: 9, raw: "Blake Monroe", smackdown: "Oba Femi" },
  { pick: 10, raw: "Rusev", smackdown: "Rey Fenix" },
  { pick: 11, raw: "Wade Barrett", smackdown: "Sol Ruca" },
  { pick: 12, raw: "Bron Breakker", smackdown: "AJ Lee" },
  { pick: 13, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 14, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 15, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 16, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 17, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 18, raw: "Sami Zayn", smackdown: "Kevin Owens" },
  { pick: 19, raw: "Sami Zayn", smackdown: "Kevin Owens" }
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
