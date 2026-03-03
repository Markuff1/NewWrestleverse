import "./Header.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { currentPPV } from "./currentPPV";

function Header() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  return (
    <header className="HeaderBackground">
      <div className="HeaderContainer">

        {/* Logo */}
        <Link to="/Home">
          <img
            className="WLogo"
            src="/Images/Wrestleverse2K26.png"
            alt="Wrestleverse"
          />
        </Link>

        {/* Navigation */}
        <nav className="Nav">
          <ul className="NavList">

            <li>
              <Link to="/Home" className="NavItem">
                <img src="/Images/Icons/Home.png" alt="" />
                <span>Home</span>
              </Link>
            </li>

            <li className="Dropdown">
              <Link to="/shows" className="NavItem">
                <img src="/Images/Icons/Show.png" alt="" />
                <span>Shows</span>
              </Link>

              <div className="DropdownMenu">
                <Link to="/raw">RAW</Link>
                <Link to="/SD">SmackDown</Link>
                <Link to="/Draft">Draft</Link>
                <Link to={currentPPV.link}>Latest PPV</Link>
              </div>
            </li>

            <li>
              <Link to="/Roster" className="NavItem">
                <img src="/Images/Icons/Roster.png" alt="" />
                <span>Roster</span>
              </Link>
            </li>

            <li>
              <Link to="/News" className="NavItem">
                <img src="/Images/Icons/News.png" alt="" />
                <span>News</span>
              </Link>
            </li>

            {username && (
              <>
                {/* Next PPV box */}
                <li className="NextPPVBox">
                  <Link to={currentPPV.link} className="NextPPVLink">
                    <span className="NextPPVLabel">Next PPV</span>
                    <span className="NextPPVName">{currentPPV.name}</span>
                  </Link>
                </li>

                {/* Logout icon */}
                <li>
                  <button className="LogoutIconBtn" onClick={handleLogout}>
                    <img src="/Images/Icons/SignOut.png" alt="Sign Out" />
                  </button>
                </li>
              </>
            )}

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;