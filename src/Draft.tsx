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
