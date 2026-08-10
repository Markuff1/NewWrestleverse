import Header from "../Header";
import Footer from "../Footer";
import "../Home.css";
import "./LegalPage.css";

function PrivacyPolicy() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">

          <div className="PageBanner">
            <h1 className="PageBanner__title">Privacy Policy</h1>
          </div>

          <div className="LegalContainer">
            <p className="LegalUpdated">Last updated: 9 August 2026</p>

            <div className="LegalSection">
              <h2>What Wrestleverse Is</h2>
              <p>
                Wrestleverse is a non-commercial fan project built to track wrestling
                rosters, championships, and shows. It is not an official product of WWE,
                AAA, or any wrestling promotion, and it isn't intended for commercial use.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Information We Collect</h2>
              <ul>
                <li>
                  <strong>Account details:</strong> when you register, we store the
                  username and password you choose in our database so you can log back in.
                </li>
                <li>
                  <strong>Local storage:</strong> after logging in, your username is saved
                  in your browser's local storage so the site can keep you signed in
                  between visits. This is not a tracking or advertising cookie, and it
                  never leaves your device except to identify you to this site.
                </li>
              </ul>
              <p>
                We do not use third-party analytics, advertising networks, or tracking
                cookies, and we do not sell or share your information with anyone.
              </p>
            </div>

            <div className="LegalSection">
              <h2>How We Use Your Information</h2>
              <p>
                Your account details are used solely to let you log in and access the
                site. We don't use your data for any other purpose.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Data Retention &amp; Removal</h2>
              <p>
                Your account is kept until you ask us to remove it. If you'd like your
                account deleted, contact the site administrator and it will be removed.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Children's Privacy</h2>
              <p>
                Wrestleverse is not directed at children, and we don't knowingly collect
                information from anyone under 13.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Changes To This Policy</h2>
              <p>
                If this policy changes, the "Last updated" date above will be revised.
                Continuing to use Wrestleverse after a change means you accept the updated
                policy.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Contact</h2>
              <p>
                Questions about this policy or your data can be sent to the site
                administrator.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
