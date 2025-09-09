import "./Footer.css";

function Footer() {

  return (
    <>
      <div className="FooterBackground">
        <div className="FooterText">
          © {new Date().getFullYear()} Wrestleverse. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
