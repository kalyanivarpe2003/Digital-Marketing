import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./MyBooking.css";

const MyBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, booking, bookingId, paymentId } = location.state || {};

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

  if (!plan || !booking) {
    return (
      <div className="my-booking-page">
        <div className="my-booking-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-booking-header"
          >
            <h1>No Booking Found</h1>
            <p>Unable to load your booking details. Please start fresh.</p>
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

  const bookingDate = new Date(booking.date);
  const formattedDate = bookingDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownloadReceipt = () => {
    // Create a simple receipt text
    const receiptContent = `
BOOKING RECEIPT
====================
Booking ID: ₹{bookingId}
Payment ID: ₹{paymentId}
Date: ₹{new Date().toLocaleDateString()}

CUSTOMER INFORMATION
====================
Name: ₹{booking.fullName}
Email: ₹{booking.email}
Phone: ₹{booking.phone}

BOOKING DETAILS
====================
Plan: ₹{plan.name}
Booking Date: ₹{formattedDate}
Booking Time: ₹{booking.time}
${booking.notes ? `Notes: ₹{booking.notes}` : ""}

PAYMENT INFORMATION
====================
Amount Paid: ₹{plan.monthlyPrice}
Payment Status: Completed
Billing Cycle: Monthly

Thank you for your booking!
    `.trim();

    // Create blob and download
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `receipt-${bookingId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="my-booking-page">
      <div className="my-booking-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="my-booking-header"
        >
          <motion.h1 variants={itemVariants}>My Booking</motion.h1>
          <motion.p variants={itemVariants}>
            View and manage your booking details
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="booking-grid"
        >
          {/* Booking Details */}
          <motion.div variants={itemVariants} className="booking-info-card">
            <h3>Booking Details</h3>

            <div className="info-row">
              <span className="info-label">Booking ID</span>
              <span className="info-value">{bookingId}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Booking Date</span>
              <span className="info-value">{formattedDate}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Booking Time</span>
              <span className="info-value">{booking.time}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Booking Status</span>
              <span className="info-value">
                <span style={{ color: "#10B981", fontWeight: "800" }}>✓ Confirmed</span>
              </span>
            </div>
          </motion.div>

          {/* Customer Information */}
          <motion.div variants={itemVariants} className="booking-info-card">
            <h3>Customer Information</h3>

            <div className="info-row">
              <span className="info-label">Full Name</span>
              <span className="info-value">{booking.fullName}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Email Address</span>
              <span className="info-value">{booking.email}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Phone Number</span>
              <span className="info-value">{booking.phone}</span>
            </div>
          </motion.div>

          {/* Payment Information */}
          <motion.div variants={itemVariants} className="booking-info-card">
            <h3>Payment Information</h3>

            <div className="info-row">
              <span className="info-label">Payment ID</span>
              <span className="info-value">{paymentId}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Amount Paid</span>
              <span className="info-value">₹{plan.monthlyPrice}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Payment Status</span>
              <span className="info-value">
                <span style={{ color: "#10B981", fontWeight: "800" }}>✓ Completed</span>
              </span>
            </div>

            <div className="info-row">
              <span className="info-label">Billing Cycle</span>
              <span className="info-value">Monthly</span>
            </div>
          </motion.div>

          {/* Booking Notes */}
          {booking.notes && (
            <motion.div variants={itemVariants} className="booking-info-card full-width">
              <h3>Additional Notes</h3>

              <div style={{ color: "#B0B8C8", fontSize: "14px", lineHeight: "1.6", position: "relative", zIndex: 1 }}>
                {booking.notes}
              </div>
            </motion.div>
          )}

          {/* Plan Highlight Card */}
          <motion.div variants={itemVariants} className="plan-card-highlight">
            <div className="plan-card-header">
              <h3>Selected Plan</h3>
              <div className="plan-name-badge">{plan.name}</div>
            </div>

            <p className="plan-description">{plan.description}</p>

            <div className="plan-price-display">₹{plan.monthlyPrice}/mo</div>

            <div className="plan-features-section">
              <h4>Plan Features</h4>
              <ul className="features-list">
                {plan.features.slice(0, 6).map((feature, idx) => (
                  <li key={idx}>{feature.name}</li>
                ))}
                {plan.features.length > 6 && <li>+ {plan.features.length - 6} more</li>}
              </ul>
            </div>

            <div className="status-row">
              <div className="status-item">
                <span className="status-item-label">Booking Status</span>
                <span className="status-item-value">✓ Confirmed</span>
              </div>
              <div className="status-item">
                <span className="status-item-label">Payment Status</span>
                <span className="status-item-value">✓ Paid</span>
              </div>
            </div>
          </motion.div>

          {/* Download Receipt */}
          <motion.div variants={itemVariants} className="download-section">
            <h3>Download Receipt</h3>
            <p>Get a copy of your booking receipt and payment confirmation</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-btn"
              onClick={handleDownloadReceipt}
            >
              Download Receipt
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="my-booking-actions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn-secondary"
            onClick={() => navigate("/pricing")}
          >
            Back to Pricing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MyBooking;
