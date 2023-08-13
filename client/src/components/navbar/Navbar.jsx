import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#who-we-are" className="nav-link">Who We Are</a>
        </li>
        <li className="nav-item">
          <a href="#what-we-do" className="nav-link">What We Do</a>
        </li>
        <li className="nav-item">
          <a href="#our-projects" className="nav-link">Our Projects</a>
        </li>
        <li className="nav-item">
          <a href="#our-partners" className="nav-link">Our Partners</a>
        </li>
        <li className="nav-item">
          <a href="#contact-us" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
