import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const values = [
    { icon: "💡", title: "Innovation", description: "Constantly evolving with the latest technologies" },
    { icon: "🤝", title: "Integrity", description: "Building trust through honesty and transparency" },
    { icon: "🎯", title: "Excellence", description: "Committed to delivering exceptional quality" },
    { icon: "🌱", title: "Growth", description: "Empowering our clients to achieve success" },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About MyBusiness</h1>
          <p className="about-hero-subtitle">
            Crafting digital excellence since day one
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-section">
        <div className="about-container">
          {/* Story */}
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                We started with a simple vision: to empower businesses by creating
                world-class digital experiences. Our team of passionate developers
                and designers came together with one mission—to build solutions that
                truly matter.
              </p>
              <p>
                Today, we work with clients globally, delivering high-quality
                frontend solutions that combine creativity with cutting-edge
                technology. Every project is a testament to our commitment to
                excellence.
              </p>
              <p>
                Based in Pune, Maharashtra, we've built a reputation for delivering
                innovative, responsive, and user-friendly digital solutions that
                help businesses grow.
              </p>
              <Link to="/contact" className="cta-button">
                Let's Work Together
              </Link>
            </div>
            <div className="story-image">
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <img src="/Public/images/about.jpg" alt="About Us" className="about-image" />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional digital solutions that empower businesses
                to thrive in the digital economy, combining innovation, creativity,
                and technical excellence.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of digital solutions, recognized for our
                commitment to innovation, quality, and customer success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h3>Ready to Transform Your Business?</h3>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;