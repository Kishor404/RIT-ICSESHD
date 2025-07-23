import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><strong>Dr.M.Lakshmanan, Associate Professor (SG)/Mech</strong><br/>lakshmanan@ritrjpm.ac.in<br/>Mobile : +91 7598835844</p>
          <p><strong>Dr.A.Azhagu Jaisudhan Pazhani, Associate Professor/ECE</strong><br/>azhagujaisudhan@ritrjpm.ac.in, <br/>Mobile : +91 9443696072, +91 8524856684</p>
          <p><strong>Dr.S.Erana Veerappa Dinesh, Associate Professor/CSBS</strong><br/>dinesh@ritrjpm.ac.in<br/>Mobile : +91 9843738684</p>
          <p><strong>Ramco Institute of Technology</strong><br/>North Venganallur, Rajapalayam<br/>Virudhunagar - 626117<br/>Tamil Nadu, India</p>
        </div>

        {/* Quick Menu */}
        <div className="footer-column">
          <h3>Quick Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/callforpapers">Call for Papers</Link></li>
            <li><Link to="/importantdates">Important Dates</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="map-column">
          <h3>Nearby Attractions</h3>
          <iframe
            title="Tourist Spots near RIT"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.987438799583!2d77.5582318758376!3d9.476319390316803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d0d4b567d3bb%3A0x25ef95cba2610e65!2sRamco%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1719646000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0,0,0,0.2)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2026 | Designed & Developed by Ramco Institute of
          Technology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
