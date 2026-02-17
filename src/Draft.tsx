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
    raw: "Dudley Boyz",
    smackdown: "New Day"
  }
];

const generalDraftPicks = [
  { pick: 3, raw: "", smackdown: "" },
  { pick: 4, raw: "", smackdown: "" },
  { pick: 5, raw: "", smackdown: "" },
  { pick: 6, raw: "", smackdown: "" },
  { pick: 7, raw: "", smackdown: "" },
  { pick: 8, raw: "", smackdown: "" },
  { pick: 9, raw: "", smackdown: "" },
  { pick: 10, raw: "", smackdown: "" },
  { pick: 11, raw: "", smackdown: "" },
  { pick: 12, raw: "", smackdown: "" },
  { pick: 13, raw: "", smackdown: "" },
  { pick: 14, raw: "", smackdown: "" },
  { pick: 15, raw: "", smackdown: "" }
];

function Draft() {
  return (
    <>
      <Header />

      <div className="DraftBackground">
        <div className="DraftContainer">

          <img
            className="DraftBanner"
            src="Images/DraftHeader.png"
            alt="Draft Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> RAW & SMACKDOWN
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> First RAW & SMACKDOWN OF APRIL, 7e/5p
            </div>
          </div>

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
