import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const features = [
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Beautiful, responsive designs that adapt to any screen size",
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Lightning-fast loading times and smooth user interactions",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Enterprise-grade security to protect your business data",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Optimized experience across all devices and platforms",
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description: "Infrastructure built to serve users worldwide",
    },
    {
      icon: "💬",
      title: "Support 24/7",
      description: "Dedicated team ready to help you succeed",
    },
  ];

  return (
    <div className="home-page">
    
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">
            <span>✨ Welcome to Digital Marketing</span>
          </div>

          <h1 className="hero-title">
            We Build Digital Solutions for Your Success
          </h1>

          <p className="hero-subtitle">
            From responsive websites to powerful digital strategies, we help you
            grow your business online and reach more customers than ever before.
          </p>

          <div className="hero-cta">
            <Link to="/pricing" className="bttn-primary">
              View Our Plans
            </Link>
            <Link to="/about" className="bttn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>
              We combine cutting-edge technology with creative excellence to
              deliver exceptional digital experiences
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <h2>Welcome to MyBusiness</h2>
          <p>
            We are a passionate team of developers and designers creating modern,
            responsive, and user-friendly digital experiences. Our goal is to help
            businesses of all sizes establish a strong online presence and reach
            more customers through effective design and technology.
          </p>
          <Link to="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;