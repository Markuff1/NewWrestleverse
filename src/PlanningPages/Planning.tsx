import "../Home.css";
import "./Planning.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { currentPPV } from "../currentPPV";

function Planning() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          <div className="PageBanner">
            <h1 className="PageBanner__title">PLANNING</h1>
          </div>

          <div className="PlanningHub">
            <Link to="/Planning/Weekly" className="PlanningHubCard PlanningHubCard--weekly">
              <div className="PlanningHubLogos">
                <img src="/Images/RAWLogo.webp" alt="RAW" />
                <img src="/Images/SDLogo.webp" alt="Smackdown" />
              </div>
              <div className="PlanningHubBody">
                <h2>Weekly Show Planning</h2>
                <p>Book RAW and Smackdown week by week on the road to the next PPV.</p>
                <span className="PlanningHubCTA">Start Planning &rarr;</span>
              </div>
            </Link>

            <Link to="/Planning/PPV" className="PlanningHubCard PlanningHubCard--ppv">
              <img src={currentPPV.image} alt="" className="PlanningHubPoster" />
              <div className="PlanningHubScrim" />
              <div className="PlanningHubBody">
                <h2>PPV Planning</h2>
                <p>Build the match card for every PPV of the year.</p>
                <span className="PlanningHubCTA">Start Planning &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Planning;
