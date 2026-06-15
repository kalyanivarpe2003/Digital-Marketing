import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>⚡</span>
          <span>Digital Marketing</span>
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          {open ? "" : "☰"}
        </button>

       <ul className={open ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link
              to="/"
                 onClick={closeMenu}
                   className={isActive("/") ? "navbar-link active" : "navbar-link"}
             >
             Home
          </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              onClick={closeMenu} 
              className={`navbar-link ₹{isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/services" 
              onClick={closeMenu} 
              className={`navbar-link ₹{isActive("/services") ? "active" : ""}`}
            >
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/pricing" 
              onClick={closeMenu} 
              className={`navbar-link ₹{isActive("/pricing") ? "active" : ""}`}
            >
              Pricing
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              onClick={closeMenu} 
              className={`navbar-link ₹{isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link
            to="/login"
                  onClick={closeMenu}
                    className="navbar-login"
                           >
  Login
</Link>          
          </li>
          <li className="navbar-item">
            <Link 
              to="/register" 
              onClick={closeMenu} 
              className="navbar-cta"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;