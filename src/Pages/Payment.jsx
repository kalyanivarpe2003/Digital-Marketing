import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, booking, bookingId } = location.state || {};

  const [selectedMethod, setSelectedMethod] = useState("card");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").slice(0, 16);
      formattedValue = formattedValue.replace(/(\d{4})/g, "₹1 ").trim();
    } else if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
      }
    } else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validatePayment = () => {
    const newErrors = {};

    if (selectedMethod === "card") {
      if (!cardData.cardNumber.replace(/\s/g, "")) {
        newErrors.cardNumber = "Card number is required";
      } else if (cardData.cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }

      if (!cardData.cardholderName) {
        newErrors.cardholderName = "Cardholder name is required";
      }

      if (!cardData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (cardData.expiryDate.length !== 5) {
        newErrors.expiryDate = "Invalid expiry date (MM/YY)";
      }

      if (!cardData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (cardData.cvv.length !== 3) {
        newErrors.cvv = "CVV must be 3 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (validatePayment()) {
      setLoading(true);
      setTimeout(() => {
        navigate("/view-booking", {
          state: {
            plan,
            booking,
            bookingId,
            paymentId: `PAY-${Date.now()}`,
            paymentMethod: selectedMethod,
            amount: plan.monthlyPrice,
          },
        });
        setLoading(false);
      }, 1000);
    }
  };

  if (!plan || !booking) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="payment-header"
          >
            <h1>Payment Error</h1>
            <p>Unable to process payment. Please start again.</p>
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

  return (
    <div className="payment-page">
      <div className="payment-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="payment-header"
        >
          <motion.h1 variants={itemVariants}>Payment Details</motion.h1>
          <motion.p variants={itemVariants}>
            Complete your payment securely to confirm your booking
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="payment-content"
        >
          {/* Payment Form */}
          <motion.div variants={itemVariants}>
            {/* Order Summary Card */}
            <div className="payment-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span className="summary-row-label">Plan Name</span>
                <span className="summary-row-value">{plan.name}</span>
              </div>

              <div className="summary-row">
                <span className="summary-row-label">Customer</span>
                <span className="summary-row-value">{booking.fullName}</span>
              </div>

              <div className="summary-row">
                <span className="summary-row-label">Booking Date</span>
                <span className="summary-row-value">
                  {new Date(booking.date).toLocaleDateString()}
                </span>
              </div>

              <div className="summary-row">
                <span className="summary-row-label">Booking Time</span>
                <span className="summary-row-value">{booking.time}</span>
              </div>

              <div className="summary-row">
                <span className="summary-row-label">Billing Cycle</span>
                <span className="summary-row-value">Monthly</span>
              </div>

              <div className="summary-total">
                <span className="summary-total-label">Total Amount</span>
                <span className="summary-total-value">₹{plan.monthlyPrice}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <h3>Payment Method</h3>

              <div className="payment-methods-grid">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "card" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("card")}
                >
                  💳 Credit Card
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "debit" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("debit")}
                >
                  💳 Debit Card
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "upi" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("upi")}
                >
                  📱 UPI
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "googlepay" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("googlepay")}
                >
                  🔵 Google Pay
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "phonepe" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("phonepe")}
                >
                  📲 PhonePe
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`payment-method-btn ₹{selectedMethod === "paytm" ? "active" : ""}`}
                  onClick={() => setSelectedMethod("paytm")}
                >
                  🔴 Paytm
                </motion.button>
              </div>

              {/* Card Form (only show for card/debit) */}
              {(selectedMethod === "card" || selectedMethod === "debit") && (
                <form className="card-form">
                  <div className="card-form-row full">
                    <div className="card-form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                      {errors.cardNumber && (
                        <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px" }}>
                          {errors.cardNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card-form-row full">
                    <div className="card-form-group">
                      <label htmlFor="cardholderName">Cardholder Name</label>
                      <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={cardData.cardholderName}
                        onChange={handleCardChange}
                        placeholder="Name on card"
                      />
                      {errors.cardholderName && (
                        <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px" }}>
                          {errors.cardholderName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card-form-row">
                    <div className="card-form-group">
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                      {errors.expiryDate && (
                        <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px" }}>
                          {errors.expiryDate}
                        </span>
                      )}
                    </div>
                    <div className="card-form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        maxLength="3"
                      />
                      {errors.cvv && (
                        <span style={{ color: "#EF4444", fontSize: "12px", marginTop: "5px" }}>
                          {errors.cvv}
                        </span>
                      )}
                    </div>
                  </div>
                </form>
              )}

              {(selectedMethod === "upi" || selectedMethod === "googlepay" || selectedMethod === "phonepe" || selectedMethod === "paytm") && (
                <div style={{ padding: "20px 0", textAlign: "center" }}>
                  <p style={{ fontSize: "14px", color: "#B0B8C8", margin: "0 0 20px 0" }}>
                    You will be redirected to {selectedMethod.toUpperCase()} to complete the payment
                  </p>
                </div>
              )}

              <div className="security-info">
                Your payment information is secure and encrypted
              </div>

              <div className="payment-actions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={handlePayNow}
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Summary Sidebar */}
          <motion.div variants={itemVariants}>
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="payment-summary">
                <h3>Billing Details</h3>

                <div className="summary-row">
                  <span className="summary-row-label">Plan</span>
                  <span className="summary-row-value">{plan.name}</span>
                </div>

                <div className="summary-row">
                  <span className="summary-row-label">Price</span>
                  <span className="summary-row-value">₹{plan.monthlyPrice}/mo</span>
                </div>

                <div className="summary-row">
                  <span className="summary-row-label">Tax</span>
                  <span className="summary-row-value">₹0</span>
                </div>

                <div className="summary-total">
                  <span className="summary-total-label">Total</span>
                  <span className="summary-total-value">₹{plan.monthlyPrice}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
