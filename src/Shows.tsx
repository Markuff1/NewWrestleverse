import "./Shows.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const weeklyShows = [
  { name: "RAW", image: "/Images/RAW.webp" },
  { name: "SD", image: "/Images/SD.webp" },
  { name: "Draft", image: "/Images/Draft2K26.webp" },
];

const ppvShows = [
  [
    { name: "BraggingRights", image: "/Images/PPV/BR/BR2028.webp" },
    { name: "RoyalRumble", image: "/Images/PPV/RoyalRumble/RoyalRumble2028.webp" },
    { name: "EC", image: "/Images/PPV/EC/EC1.webp" },
  ],
  [
    { name: "Wrestlemania", image: "/Images/PPV/Wrestlemania/Wrestlemania41.webp" },
    { name: "Backlash", image: "/Images/PPV/Backlash/Backlash2028.webp" },
    { name: "ClashInParis", image: "/Images/PPV/ClashInParis/CIP2027.webp" },
  ],
  [
    { name: "MITB", image: "/Images/PPV/MITB/MITB2027.webp" },
    { name: "SummerSlam", image: "/Images/PPV/SummerSlam/SS2027.webp" },
    { name: "NOC", image: "/Images/PPV/NOC/NOC2027.webp" },
  ],
  [
    { name: "ER", image: "/Images/PPV/ER/ER2027.webp" },
    { name: "SurvivorSeries", image: "/Images/PPV/SurvivorSeries/SS2027.webp" },
    { name: "Armageddon", image: "/Images/PPV/Armageddon/Armageddon2027.webp" }
  ]
];

const retiredPPVs = [
  [
    { name: "NYR", image: "/Images/PPV/NYR/NYR2027.webp" },
    { name: "ONS", image: "/Images/PPV/ONS/ONS.webp" },
    { name: "NoMercy", image: "/Images/PPV/NoMercy/NoMercy.webp" },
    { name: "CyberSunday", image: "/Images/PPV/CyberSunday/CyberSunday.webp" },
    { name: "NoWayOut", image: "/Images/PPV/NoWayOut/NoWayOut.webp" },
    { name: "OverTheLimit", image: "/Images/PPV/OverTheLimit/OTL2026.webp" },
    { name: "HIAC", image: "/Images/PPV/HIAC/HIAC2026.webp" },
    { name: "TLC", image: "/Images/PPV/TLC/TLC2026.webp" },
  ]
];

function Shows() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">

          <div className="PageBanner">
            <h1 className="PageBanner__title">SHOWS</h1>
          </div>

          <div className="ShowsText1">Weekly Shows</div>

          {weeklyShows.map((show, index) => (
            <Link key={show.name} to={`/${show.name}`}>
              <img
                className="WeeklyShow"
                src={show.image}
                alt={show.name}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </Link>
          ))}

          <div className="PageDivider" />

          <div className="ShowsText1">Current PPVs</div>

          {ppvShows.map((row, rowIndex) => (
            <div className="centerPPV" key={rowIndex}>
              {row.map((ppv) => (
                <Link key={ppv.name} to={`/${ppv.name}`}>
                  <img
                    className="PPVShows"
                    src={ppv.image}
                    alt={ppv.name}
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              ))}
            </div>
          ))}

          <div className="PageDivider" />

          <div className="ShowsText1">Retired PPVs</div>

          {retiredPPVs.map((row, rowIndex) => (
            <div className="retiredPPVGrid" key={rowIndex}>
              {row.map((ppv) => (
                <Link key={ppv.name} to={`/${ppv.name}`}>
                  <img
                    className="retiredPPVShows"
                    src={ppv.image}
                    alt={ppv.name}
                    loading="lazy"
                    decoding="async"
                  />
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