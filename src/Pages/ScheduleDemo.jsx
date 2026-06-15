import React, { useState } from "react";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo request submitted successfully!");
    console.log(formData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0911",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#13101C",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid rgba(139,92,246,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Schedule a Demo
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#B0B8C8",
            marginBottom: "30px",
          }}
        >
          Book a personalized demo with our team.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background:
                "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Schedule Demo
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "#1A1625",
  color: "#fff",
  boxSizing: "border-box",
};

export default ScheduleDemo;