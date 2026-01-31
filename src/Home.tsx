import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

    const [username, setUsername] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);  //Gets the username to display
      }
    }, []);

    
  return (
    <>
      <Header />
      <div className="HomeBackground">
        <div className="home-content">
          <img
            className="WVLogo"
            src="/Images/Wrestleverse2K26.png"
            alt="Logo"
          />
          <h1 className="WVText">WELCOME TO WRESTLEVERSE</h1>
          <h2 className="WVText2">
          {username ? `Hi ${username} Welcome to the Wrestleverse - ` : ''}
          This is an interactive website that I use to tract my current <br></br>
          2K Universe Mode <br></br> 
          I use it to track things like Champions, PPV, Shows and Roster. Feel free to look around</h2>
          <div className="button-group">
            <Link to="/Shows" className="shows-btn">SHOWS</Link>
            <Link to="/Roster" className="roster-btn">ROSTER</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
