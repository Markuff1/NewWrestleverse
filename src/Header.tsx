import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { E2E_USER_KEY, e2eUser, useAuthUser } from "./auth";
import { currentPPV } from "./currentPPV";

function Header() {
  const user = useAuthUser();
  const username = user?.displayName ?? e2eUser() ?? "";
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem(E2E_USER_KEY);
    localStorage.removeItem("username"); // left over from the old login
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="HeaderBackground">
      <div className="HeaderContainer">

        {/* Logo */}
        <Link to="/Home">
          <img
            className="WLogo"
            src="/Images/WrestleVerseLogoV5.webp"
            alt="Wrestleverse"
          />
        </Link>

        {/* Navigation */}
        <nav className="Nav">
          <ul className="NavList">

            <li>
              <Link to="/Home" className="NavItem">
                <img src="/Images/Icons/Home.webp" alt="" />
                <span>Home</span>
              </Link>
            </li>

            <li className="Dropdown">
              <Link to="/shows" className="NavItem">
                <img src="/Images/Icons/Show.webp" alt="" />
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
                <img src="/Images/Icons/Roster.webp" alt="" />
                <span>Roster</span>
              </Link>
            </li>

            <li>
              <Link to="/Calendar" className="NavItem">
                <img src="/Images/Icons/Calendar.webp" alt="" />
                <span>Calendar</span>
              </Link>
            </li>

            <li className="Dropdown">
              <Link to="/Planning" className="NavItem">
                <img src="/Images/Icons/Edit.webp" alt="" />
                <span>Planning</span>
              </Link>

              <div className="DropdownMenu">
                <Link to="/Planning/Weekly">Weekly Shows</Link>
                <Link to="/Planning/PPV">PPVs</Link>
              </div>
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
                    <img src="/Images/Icons/SignOut.webp" alt="Sign Out" />
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