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
    { name: "NYR", image: "/Images/PPV/NYR/NYR2027.png" },
    { name: "RoyalRumble", image: "/Images/PPV/RoyalRumble/RoyalRumble2027.png" },
    { name: "NoWayOut", image: "/Images/PPV/NoWayOut/NoWayOut.png" },
  ],
  [
    { name: "Wrestlemania", image: "/Images/PPV/Wrestlemania/Wrestlemania40.png" },
    { name: "Backlash", image: "/Images/PPV/Backlash/Backlash2026.png" },
    { name: "OverTheLimit", image: "/Images/PPV/OverTheLimit/OTL2026.png" },
  ],
  [
    { name: "MITB", image: "/Images/PPV/MITB/MITB2026.png" },
    { name: "SummerSlam", image: "/Images/PPV/SummerSlam/SummerSlam2026V1.png" },
    { name: "NOC", image: "/Images/PPV/NOC/NOC2026.png" },
  ],
  [
    { name: "HIAC", image: "/Images/PPV/HIAC/HIAC2026.png" },
    { name: "SurvivorSeries", image: "/Images/PPV/SurvivorSeries/SS1.png" },
    { name: "TLC", image: "/Images/PPV/TLC/TLC2026.png" }
  ]
];

const retiredPPVs = [
  [
    { name: "ONS", image: "/Images/PPV/ONS/ONS.png" },
    { name: "NoMercy", image: "/Images/PPV/NoMercy/NoMercy.png" },
    { name: "CyberSunday", image: "/Images/PPV/CyberSunday/CyberSunday.png" },
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
