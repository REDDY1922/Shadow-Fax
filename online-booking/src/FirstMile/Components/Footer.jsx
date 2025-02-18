import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="main-section">
          <div className="logo-container">
            <FontAwesomeIcon icon={faPlay} className="logo-icon" />
            <h2 className="company-name">Shadow Fax</h2>
          </div>
          <p className="main-description">
            Achieving a customer-centric logistics model requires strategic planning and consistent effort.
          </p>
        </div>
        <div className="company-section">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link to="/About" aria-label="Learn more about us">About</Link>
            </li>
            <li>
              <Link to="/Features" aria-label="Explore our features">Features</Link>
            </li>
            <li>
              <Link to="/Works" aria-label="See how it works">Works</Link>
            </li>
          </ul>
        </div>
        <div className="help-section">
          <h3>HELP</h3>
          <ul>
            <li>
              <Link to="/CustomerSupport" aria-label="Contact customer support">Customer Support</Link>
            </li>
            <li>
              <Link to="/DeliveryDetails" aria-label="View delivery details">Delivery Details</Link>
            </li>
            <li>
              <Link to="/TermsConditions" aria-label="Read terms and conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy" aria-label="Read our privacy policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by AbcSystems</p>
      </div>
    </footer>
  );
}

export default Footer;
