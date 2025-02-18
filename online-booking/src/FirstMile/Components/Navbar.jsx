import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo-container">
        <img src="vite.svg" alt="Company Logo" />
        <h1>Shadow Fax</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="login-btn">
        <Link to="/FirstMileLogin">
          <button>Log In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
