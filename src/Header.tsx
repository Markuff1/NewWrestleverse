import "./Header.css";
import "./Home.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [breakingNews] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  }

  return (
    <div>
      {/* Breaking News Banner */}
      {breakingNews && (
        <div className="BreakingNewsBanner">
          <div className="BreakingNewsContent">
            <span>BREAKING NEWS : {breakingNews}!!!!!!</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="HeaderBackground">
        <div className="HeaderContainer">
          <Link to="/Home"><img className="WLogo" src="/Images/Wrestleverse2K25.png" alt="Logo" /></Link>

          <nav className="nav">
            <ul className="nav__links" id="sidemenu">
              <li><Link to="/Home">HOME</Link></li>
              <li className="dropdown">
                <Link to="/shows">SHOWS</Link>
                <div className="dropdown-content">
                  <Link to="/raw">RAW</Link>
                  <Link to="/SD">SMACKDOWN</Link>
                  <Link to="/HIAC">LATEST PPV</Link>
                </div>
              </li>
              <li><Link to="/Roster">ROSTER</Link></li>

              {/* Logout button */}
              {username && (
                <li>
                  <button className="logoutButton" onClick={handleLogout}>SIGN OUT</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
