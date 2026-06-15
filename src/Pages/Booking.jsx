import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+₹/.test(formData.email)) {
      
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}₹/.test(formData.phone.replace(/\D/g, ""))) {
     
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedPayment = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        navigate("/payment", {
          state: {
            plan,
            booking: formData,
            bookingId: `BKId-${Date.now()}`,
          },
        });
        setLoading(false);
      }, 500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (!plan) {
    return (
      <div className="booking-page">
        <div className="booking-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="booking-header"
          >
            <h1>No Plan Selected</h1>
            <p>Please select a plan from pricing page</p>
            <button
              className="btn-primary"
              style={{ marginTop: "30px", padding: "12px 30px" }}
              onClick={() => navigate("/pricing")}
            >
              Back to Pricing
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="booking-header"
        >
          <motion.h1 variants={itemVariants}>Book Your Plan</motion.h1>
          <motion.p variants={itemVariants}>
            Fill in your details to complete your booking
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="booking-content"
        >
          {/* Form Section */}
          <motion.div variants={itemVariants} className="booking-form-section">
            <form className="booking-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px", display: "block" }}>
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px", display: "block" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && (
                  <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px", display: "block" }}>
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Date */}
              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px", display: "block" }}>
                    {errors.date}
                  </span>
                )}
              </div>

              {/* Time */}
              <div className="form-group">
                <label htmlFor="time">Select Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Choose a time slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                {errors.time && (
                  <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px", display: "block" }}>
                    {errors.time}
                  </span>
                )}
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label htmlFor="notes">Additional Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or notes..."
                ></textarea>
              </div>
            </form>
          </motion.div>

          {/* Summary Card */}
          <motion.div variants={itemVariants} className="booking-summary">
            <div className="summary-card">
              <h3>Booking Summary</h3>

              <div className="plan-info">
                <div className="plan-info-title">Selected Plan</div>
                <div className="plan-info-name">{plan.name}</div>
                <div style={{ fontSize: "13px", color: "#B0B8C8", marginTop: "8px" }}>
                  {plan.description}
                </div>
                <div className="plan-price">
                  ₹{plan.monthlyPrice}
                  <span style={{ fontSize: "14px", color: "#B0B8C8", marginLeft: "5px" }}>/mo</span>
                </div>
              </div>

              <div style={{ marginTop: "25px", paddingTop: "25px", borderTop: "1px solid rgba(139, 92, 246, 0.15)" }}>
                {formData.fullName && (
                  <div className="summary-item">
                    <div className="summary-item-label">Customer Name</div>
                    <div className="summary-item-value">{formData.fullName}</div>
                  </div>
                )}

                {formData.email && (
                  <div className="summary-item">
                    <div className="summary-item-label">Email</div>
                    <div className="summary-item-value">{formData.email}</div>
                  </div>
                )}

                {formData.date && (
                  <div className="summary-item">
                    <div className="summary-item-label">Booking Date</div>
                    <div className="summary-item-value">{new Date(formData.date).toLocaleDateString()}</div>
                  </div>
                )}

                {formData.time && (
                  <div className="summary-item">
                    <div className="summary-item-label">Booking Time</div>
                    <div className="summary-item-value">{formData.time}</div>
                  </div>
                )}

                <div style={{ marginTop: "25px", paddingTop: "25px", borderTop: "1px solid rgba(139, 92, 246, 0.15)" }}>
                  <div className="summary-item">
                    <div className="summary-item-label">Total Amount</div>
                    <div className="plan-price">₹{plan.monthlyPrice}</div>
                  </div>
                </div>
              </div>

              <div className="booking-actions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={handleProceedPayment}
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Processing..." : "Proceed to Payment"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                  onClick={() => navigate("/pricing")}
                >
                  Back
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
