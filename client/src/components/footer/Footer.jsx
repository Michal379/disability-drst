import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Contact Details</h3>
        <p>Kasulu Town<br />
          Murubona Area Kigoma,<br />
          Tanzania<br />
          <br />
          +255 620 583 841<br />
          <br />
          <a href="mailto:info@drst.or.tz">info@drst.or.tz</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>Location</h3>
        <p>Kasulu Town<br />
          Murubona Area Kigoma,<br />
          Tanzania</p>
      </div>
      <div className="footer-section">
        <h3>About DRST</h3>
        <p>A nonprofit making organization dealing with improvement of socio-economic condition in vulnerable, marginalized and deprived communities in Tanzania.</p>
      </div>
      <div className="footer-section footer-copyright">
  <div className="copyright-content">
    <p className="left-copyright">&copy; 2023</p>
    <p className="right-copyright">&copy; All Rights Reserved</p>
  </div>
</div>

    </div>
  );
}

export default Footer;
