import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authcontext';

export default function Navbar() {
    const { currentuser } = useContext(AuthContext);
    console.log("user from navbar", currentuser);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bolder">Property Sale</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Who We Are</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">What We Do</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Our Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/partners" className="nav-link">Our Partners</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                        {currentuser ? (
                            <>
                                {/* Your existing user-related links */}
                                {/* ... */}
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">Profile</Link>
                                </li>
                            </>
                        ) : null}
                        <li className="nav-item">
                            <a href="#" className="nav-link btn btn-warning ms-2">Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
