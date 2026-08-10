import Header from "../Header";
import Footer from "../Footer";
import "../Home.css";
import "./LegalPage.css";

function TermsAndConditions() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">

          <div className="PageBanner">
            <h1 className="PageBanner__title">Terms &amp; Conditions</h1>
          </div>

          <div className="LegalContainer">
            <p className="LegalUpdated">Last updated: 9 August 2026</p>

            <div className="LegalSection">
              <h2>Unofficial Fan Project</h2>
              <p>
                Wrestleverse is an unofficial, non-commercial fan project. It is not
                affiliated with, endorsed by, or sponsored by WWE, AAA, or any wrestling
                promotion. All wrestler names, likenesses, championship titles, logos, and
                images belong to their respective owners and are used here for fan/
                entertainment purposes only.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Accounts</h2>
              <ul>
                <li>You must provide accurate information when registering.</li>
                <li>You're responsible for keeping your login details secure.</li>
                <li>
                  We may suspend or remove accounts used to abuse or disrupt the site.
                </li>
              </ul>
            </div>

            <div className="LegalSection">
              <h2>Acceptable Use</h2>
              <p>
                Don't use Wrestleverse to upload unlawful content, attempt to disrupt the
                site, or access data that isn't yours.
              </p>
            </div>

            <div className="LegalSection">
              <h2>No Warranty</h2>
              <p>
                Wrestleverse is provided "as is," for entertainment purposes, with no
                guarantee of accuracy, availability, or fitness for any particular
                purpose. Content (rosters, championship histories, show details) is
                maintained on a best-effort basis and may contain errors.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Wrestleverse and its operator
                aren't liable for any damages arising from your use of the site.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Changes To These Terms</h2>
              <p>
                These terms may be updated from time to time. Continuing to use the site
                after a change means you accept the updated terms.
              </p>
            </div>

            <div className="LegalSection">
              <h2>Contact</h2>
              <p>Questions about these terms can be sent to the site administrator.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default TermsAndConditions;
