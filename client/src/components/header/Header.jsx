import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    return (
        <header className="header navbar navbar-expand-lg bg-success mt-3 fixed-top" style={{ position: 'sticky', top: 0, zIndex: 999 }}>
            <div className="container">
                <div className="header-content d-flex justify-content-between align-items-center">
                    <div className="header-right d-flex flex-column align-items-center" style={{ marginLeft: '20px' }}>
                        <div className="social-links">
                            {/* Phone */}
                            <a
                                href="tel:+1234567890"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faPhone} /> (+255) 620 583-841
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@drst.co.tz"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> info@drst.co.tz
                            </a>

                            {/* Location */}
                            <a
                                href="https://www.example.com/location"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faMapMarker} /> Murubona, Kasulu, Kigoma Tanzania
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/your-youtube-channel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>

                            {/* Other social media links */}
                            <a
                                href="https://www.facebook.com/yourfacebookpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a
                                href="https://twitter.com/yourtwitterpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.instagram.com/yourinstagrampage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/yourlinkedinpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@yourtiktokpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
