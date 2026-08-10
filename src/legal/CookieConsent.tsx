import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.css";

const CONSENT_KEY = "cookieConsent";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="CookieConsent" role="dialog" aria-label="Cookie notice">
      <p className="CookieConsentText">
        Wrestleverse uses your browser's local storage to keep you signed in — it doesn't
        use any third-party tracking or advertising cookies. By continuing to use this
        site you agree to that, and to our{" "}
        <Link to="/PrivacyPolicy">Privacy Policy</Link> and{" "}
        <Link to="/TermsAndConditions">Terms &amp; Conditions</Link>.
      </p>
      <button className="CookieConsentButton" onClick={accept}>
        Got it
      </button>
    </div>
  );
}

export default CookieConsent;
