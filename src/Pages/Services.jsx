import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import "../App.css";

function Services() {
  return (
    <section className="services-page">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">✨ Professional Services</span>

          <h1 className="services-title">Our Services</h1>

          <p className="services-subtitle">
            We offer a wide range of frontend development and design services.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-buttons">
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>

          <Link to="/contact" className="secondary-btn">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;