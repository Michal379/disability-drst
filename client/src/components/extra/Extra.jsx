import React from 'react';
import { Link } from 'react-router-dom';
import './Extra.css'; 

const Extra = () => {
  return (
    <div className="extra-container">
      <div className="text-section">
        <p>Join Hands with DRS Tanzania to Empower Vulnerable</p>
        <p>Communities</p>
        <p>Together, Let's Build a Brighter Future for All!</p>
      </div>
      <Link to="/contact-us" className="cta-button">CALL TO ACTION</Link>
    </div>
  );
}

export default Extra;
