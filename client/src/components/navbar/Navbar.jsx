import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/who-we-are" className="nav-link">Who We Are</Link>
        </li>
        <li className="nav-item">
          <Link to="/what-we-do" className="nav-link">What We Do</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-projects" className="nav-link">Our Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-partners" className="nav-link">Our Partners</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
