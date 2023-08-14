import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'gray',
    color: '#fff',
    padding: '1rem 0',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
        <li className="nav-item">
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/who-we-are" style={linkStyle}>Who We Are</Link>
        </li>
        <li className="nav-item">
          <Link to="/what-we-do" style={linkStyle}>What We Do</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-projects" style={linkStyle}>Our Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-partners" style={linkStyle}>Our Partners</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" style={linkStyle}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
