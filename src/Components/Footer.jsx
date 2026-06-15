import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-column">
            <div className="footer-brand">
              <span>⚡</span>
              <span>Digital Marketing</span>
            </div>
            <p className="footer-description">
              Building modern, responsive, and user-friendly digital solutions for businesses worldwide.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" title="Twitter">
                𝕏
              </a>
              <a href="#" className="footer-social-link" title="LinkedIn">
                in
              </a>
              <a href="#" className="footer-social-link" title="GitHub">
                ⚙️
              </a>
              <a href="#" className="footer-social-link" title="Facebook">
                f
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Email</span>
              <span className="footer-contact-value">
                <a href="mailto:info@business.com">info@digitalmarketing.com</a>
                </span>
              </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Phone</span>
              <span className="footer-contact-value">
                <a href="tel:+919876543210">+91 9876543210</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Location</span>
              <span className="footer-contact-value">
                Pune, Maharashtra
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; {currentYear} Digital Marketing. All rights reserved.
          </span>
          <ul className="footer-legal">
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;