import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentPPV } from "./currentPPV";
import { newsArticles } from "./newsData";

function Home() {
  const [, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const latestArticle = newsArticles[0];

  return (
    <>
      <Header />
      <div className="HomeContainer">
        <div className="HomePageWrapper">
          <div className="HomeGrid">

            {/* DESCRIPTION */}
            <section className="HomeBox DescriptionBox">
              <h2>Description</h2>
              <img 
              className="WrestleLogo" 
              src="/Images/Wrestleverse2K26.png" 
              alt="Logo"
              />
              <p className="DescriptionTextTitle">Welcome to Wrestleverse</p>
              <p className="DescriptionText">
              Your ultimate interactive hub designed to fully immerse you in the world of WWE 2K Universe Mode. 
              Here, you can track every detail of my wrestling journey, from reigning Champions and their epic title reigns, to high-stakes PPVs, weekly Shows, and ever-evolving Rosters.
              </p>
            </section>

            {/* UPCOMING PPV */}
            <section className="HomeBox PPVBox">
              <h2>Next PPV</h2>

              <Link to={currentPPV.link} className="PPVWrapper">
                <img
                  src={currentPPV.image}
                  alt={currentPPV.name}
                  className="PPVImage"
                />

                <div className="PPVOverlay">
                  <h3>{currentPPV.name}</h3>
                  <p>{currentPPV.location}</p>
                  <p>{currentPPV.date}</p>
                </div>
              </Link>

              <p className="PPVImageNotes">*Hover to view PPV Info and click for PPV Card*</p>
            </section>

            {/* NEWS */}
            <section className="HomeBox NewsBox">
              <h2>Latest News</h2>

              <img
                src={latestArticle.image}
                alt={latestArticle.title}
                className="HomeNewsImage"
              />

              <h3 className="HomeNewsTitle">{latestArticle.title}</h3>
              <p className="HomeNewsDate">--- {latestArticle.date} ---</p>

              <Link to="/News" className="Hbutton">
                Read Full Article
              </Link>
            </section>

            {/* LINKS */}
            <section className="HomeBox LinksBox"> 
              <Link to="/Home" className="Linkbutton">Home</Link>
              <Link to="/News" className="Linkbutton">News</Link>
              <Link to="/Roster" className="Linkbutton">Roster</Link>
              <Link to="/Shows" className="Linkbutton">Shows</Link>
              <Link to="/RAW" className="Linkbutton">RAW</Link>
              <Link to="/SD" className="Linkbutton">Smackdown</Link>
              <Link to="/Draft" className="Linkbutton">Draft</Link>
              <Link to={currentPPV.link} className="Linkbutton">Latest PPV</Link>
            </section>

          </div>
        </div>
      </div>  

      <Footer />
    </>
  );
}

export default Home;