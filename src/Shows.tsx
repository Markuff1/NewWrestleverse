import "./Shows.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const weeklyShows = [
  { name: "RAW", image: "/Images/RAW.png" },
  { name: "SD", image: "/Images/SD.png" },
];

const ppvShows = [
  [
    { name: "NYR", image: "/Images/PPV/NYR/NYR.png" },
    { name: "RoyalRumble", image: "/Images/PPV/RoyalRumble/RoyalRumble.png" },
    { name: "NoWayOut", image: "/Images/PPV/NoWayOut/NoWayOut.png" },
  ],
  [
    { name: "Wrestlemania", image: "/Images/PPV/Wrestlemania/Wrestlemania40.png" },
    { name: "Backlash", image: "/Images/PPV/Backlash/Backlash2026.png" },
    { name: "OverTheLimit", image: "/Images/PPV/OverTheLimit/OTL2026.png" },
  ],
  [
    { name: "MITB", image: "/Images/PPV/MITB/MITB.png" },
    { name: "SummerSlam", image: "/Images/PPV/SummerSlam/Summerslam.png" },
    { name: "NoMercy", image: "/Images/PPV/NoMercy/NoMercy.png" },
  ],
  [
    { name: "CyberSunday", image: "/Images/PPV/CyberSunday/CyberSunday.png" },
    { name: "SurvivorSeries", image: "/Images/PPV/SurvivorSeries/SurvivorSeries.png" },
    { name: "TLC", image: "/Images/PPV/TLC/TLC.png" }
  ]
];

const retiredPPVs = [
  [
    { name: "ONS", image: "/Images/PPV/ONS/ONS.png" },
  ]
];

function Shows() {
  return (
    <>
      <Header />
      <div className="ShowsBackground">
        <div className="ShowsContainer">
          <img className="SBanner" src="/Images/ShowsHeader.png" alt="Shows Banner" />
          
          <div className="ShowsText1">Weekly Shows</div>
          {weeklyShows.map((show) => (
            <Link key={show.name} to={`/${show.name}`}>
              <img className="WeeklyShow" src={show.image} alt={show.name} />
            </Link>
          ))}
          
          <div className="ShowsText1">Current PPVs</div>
          {ppvShows.map((row, rowIndex) => (
            <div className="centerPPV" key={rowIndex}>
              {row.map((ppv) => (
                <Link key={ppv.name} to={`/${ppv.name}`}>
                  <img className="PPVShows" src={ppv.image} alt={ppv.name} />
                </Link>
              ))}
            </div>
          ))}

          <div className="ShowsText1">Retired PPVs</div>
          {retiredPPVs.map((row, rowIndex) => (
            <div className="centerPPV" key={rowIndex}>
              {row.map((ppv) => (
                <Link key={ppv.name} to={`/${ppv.name}`}>
                  <img className="PPVShows" src={ppv.image} alt={ppv.name} />
                </Link>
              ))}
            </div>
          ))}
          
          <div className="ShowsText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shows;
