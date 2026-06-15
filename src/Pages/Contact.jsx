import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>Email: info@business.com</p>
            <p>Phone: +91 9876543210</p>

            <Link to="/" className="btn">
              Back Home
            </Link>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;