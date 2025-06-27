import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="topbar-container">
        <div className="logo-box">
          <img src="images/Ramco-logo.jpg" alt="College Logo" className="logo-left" />
        </div>

        <div className="conference-details">
          <h1 className="main-title">ICSESHD 2026</h1>
          <p className="subtitle">
            <strong> INTERNATIONAL CONFERENCE ON SMART ENGINEERING SOLUTIONS FOR SUSTAINABLE AND HUMANITARIAN DEVELOPMENT</strong>
          </p>
          <p className="mode">26<sup>th</sup>, 27<sup>th</sup> June 2026</p>
        </div>

        <div className="logo-box">
          <img src="./images/ieee-logo.png" alt="IEEE Logo" className="logo-right" />
        </div>
      </div>

      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/committee">Committees</Link></li>
          <li><Link to="/callforpapers">Call for Papers</Link></li>
          <li><Link to="/importantdates">Important Dates</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/program">Program Schedule</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
