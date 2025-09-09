import "./Shows.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const weeklyShows = [
  { name: "RAW", image: "/src/Images/RAW.png" },
  { name: "SD", image: "/src/Images/SD.png" },
];

const ppvShows = [
  [
    { name: "NYR", image: "/src/Images/PPV/NYR/NYR.png" },
    { name: "RoyalRumble", image: "/src/Images/PPV/RoyalRumble/RoyalRumble.png" },
    { name: "NoWayOut", image: "/src/Images/PPV/NoWayOut/NoWayOut.png" },
  ],
  [
    { name: "Wrestlemania", image: "/src/Images/PPV/Wrestlemania/Wrestlemania40.png" },
    { name: "Backlash", image: "/src/Images/PPV/Backlash/Backlash2026.png" },
    { name: "OverTheLimit", image: "/src/Images/PPV/OverTheLimit/OTL2026.png" },
  ],
  [
    { name: "MITB", image: "/src/Images/PPV/MITB/MITB.png" },
    { name: "SummerSlam", image: "/src/Images/PPV/SummerSlam/SummerSlam.png" },
    { name: "NoMercy", image: "/src/Images/PPV/NoMercy/NoMercy.png" },
  ],
  [
    { name: "CyberSunday", image: "/src/Images/PPV/CyberSunday/CyberSunday.png" },
    { name: "SurvivorSeries", image: "/src/Images/PPV/SurvivorSeries/SurvivorSeries.png" },
    { name: "TLC", image: "/src/Images/PPV/TLC/TLC.png" }
  ]
];

const retiredPPVs = [
  [
    { name: "ONS", image: "/src/Images/PPV/ONS/ONS.png" },
  ]
];

function Shows() {
  return (
    <>
      <Header />
      <div className="ShowsBackground">
        <div className="ShowsContainer">
          <img className="SBanner" src="/src/Images/ShowsHeader.png" alt="Shows Banner" />
          
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
