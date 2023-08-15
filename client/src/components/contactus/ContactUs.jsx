import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <h3>Contact Details</h3>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarker} className="icon" />
          <p>
            <span className="contact-label">Physical Address:</span> Disability Relief Services (DRS) Tanzania<br />
            <span className="contact-label">Kasulu Town:</span> Murubona Area Kigoma, Tanzania
          </p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMobileAlt} className="icon" />
          <p><span className="contact-label">Mobile:</span> +255 620 583 841</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>
            <span className="contact-label">Email:</span> <a href="mailto:info@drst.or.tz">info@drst.or.tz</a><br />
            <span className="contact-label">Website:</span> <a href="http://www.drst.or.tz" target="_blank" rel="noopener noreferrer">www.drst.or.tz</a>
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h3 className="form-title">Contact Us</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button className="send-button" type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
