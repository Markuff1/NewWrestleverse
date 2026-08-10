import { Link } from "react-router-dom";
import "./Footer.css";
import "./Home.css";

function Footer() {

  return (
    <>
      <div className="FooterBackground">
        <div className="FooterText">
          <span className="FooterLinks">
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </span>
          © {new Date().getFullYear()} Wrestleverse. All Rights Reserved.
          <span className="FooterLinks">
            <Link to="/TermsAndConditions">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
