import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import RamcoLogo from "../assets/images/Ramco-logo.jpg"
import IEEELogo from "../assets/images/ieee-logo.png"

const Navbar = () => {
  return (
    <>
      <div className="topbar-container">
        <div className="logo-box">
          <img src={RamcoLogo} alt="College Logo" className="logo-left" />
        </div>

        <div className="conference-details">
          <h1 className="main-title">ICSESHD 2026</h1>
          <p className="subtitle">
            <strong> INTERNATIONAL CONFERENCE ON SMART ENGINEERING SOLUTIONS FOR SUSTAINABLE AND HUMANITARIAN DEVELOPMENT</strong>
          </p>
          <p className="mode">26<sup>th</sup>, 27<sup>th</sup> June 2026</p>
        </div>

        <div className="logo-box">
          <img src={IEEELogo} alt="IEEE Logo" className="logo-right" hidden/>
        </div>
      </div>

      <section className="intro">
              <div className="fade-overlay"></div>
              <div className="intro-cont">
                <p className="conference-subtitle">
                  1<sup>st</sup> International Conference on Smart Engineering Solutions for Sustainable and Humanitarian Development
                </p>
                <h1>ICSESHD 2026</h1>
                {/* <p className="conference-subtitle">
                  3<sup>rd</sup> International Conference on Smart Engineering Solutions for Sustainable and Humanitarian Development
                </p> */}
                <p className="highlight">Hybrid Mode | Technically Co-sponsored by IEEE</p>
                <div className="date-box">
                  <strong>Date of Conference :</strong> 26<sup>th</sup> - 27<sup>th</sup> June 2026
                </div>
              </div>
            </section>

      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/committee">COMMITTEES</Link></li>
          <li><Link to="/callforpapers">CALL FOR PAPERS</Link></li>
          <li><Link to="/importantdates">IMPORTANT DATES</Link></li>
          <li><Link to="/registration">REGISTRATION</Link></li>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
