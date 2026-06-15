import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./ViewBooking.css";

const ViewBooking = () => {
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
      <div className="view-booking-page">
        <div className="view-booking-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="view-booking-header"
          >
            <h1>Error</h1>
            <p>Unable to load booking details. Please start again.</p>
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

  return (
    <div className="view-booking-page">
      <div className="view-booking-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="view-booking-header"
        >
          <motion.div variants={itemVariants} className="success-icon">
            ✓
          </motion.div>
          <motion.h1 variants={itemVariants}>Booking Confirmed!</motion.h1>
          <motion.p variants={itemVariants}>
            Your booking has been successfully created and payment processed
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="booking-details-container"
        >
         
          <motion.div variants={itemVariants} className="detail-card">
            <h3>Booking Information</h3>

            <div className="detail-item">
              <span className="detail-label">Booking ID</span>
              <span className="detail-value">{bookingId}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Booking Status</span>
              <span className="detail-value">
                <span className="status-badge status-success">✓ Confirmed</span>
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Payment Status</span>
              <span className="detail-value">
                <span className="status-badge status-success">✓ Completed</span>
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Payment ID</span>
              <span className="detail-value">{paymentId}</span>
            </div>
          </motion.div>

        
          <motion.div variants={itemVariants} className="detail-card">
            <h3>Customer Information</h3>

            <div className="detail-item">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{booking.fullName}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{booking.email}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone Number</span>
              <span className="detail-value">{booking.phone}</span>
            </div>
          </motion.div>

         
          <motion.div variants={itemVariants} className="detail-card">
            <h3>Booking Schedule</h3>

            <div className="detail-item">
              <span className="detail-label">Booking Date</span>
              <span className="detail-value">{formattedDate}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Booking Time</span>
              <span className="detail-value">{booking.time}</span>
            </div>

            {booking.notes && (
              <div className="detail-item">
                <span className="detail-label">Special Requests</span>
                <span className="detail-value">{booking.notes}</span>
              </div>
            )}
          </motion.div>

          
          <motion.div variants={itemVariants} className="detail-card">
            <h3>Payment Information</h3>

            <div className="detail-item">
              <span className="detail-label">Amount Paid</span>
              <span className="detail-value">${plan.monthlyPrice}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Billing Cycle</span>
              <span className="detail-value">Monthly</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Next Billing Date</span>
              <span className="detail-value">
                {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()}
              </span>
            </div>
          </motion.div>

        
          <motion.div variants={itemVariants} className="plan-highlight-card">
            <h3>Selected Plan Details</h3>

            <div className="plan-highlight-content">
              <div className="plan-info-section">
                <h4>Plan Name</h4>
                <div className="plan-name">{plan.name}</div>
                <p style={{ fontSize: "13px", color: "#B0B8C8", margin: "8px 0 0 0" }}>
                  {plan.description}
                </p>
              </div>

              <div className="plan-info-section">
                <h4>Plan Price</h4>
                <div className="plan-price-badge">₹{plan.monthlyPrice}/mo</div>
                <ul className="plan-features-list">
                  {plan.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature.name}</li>
                  ))}
                  {plan.features.length > 3 && <li>+ {plan.features.length - 3} more features</li>}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="view-booking-actions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn-primary"
            onClick={() =>
              navigate("/my-booking", {
                state: {
                  plan,
                  booking,
                  bookingId,
                  paymentId,
                },
              })
            }
          >
            View My Booking
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn-secondary"
            onClick={() => navigate("/pricing")}
          >
            Back to Pricing
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ViewBooking;
