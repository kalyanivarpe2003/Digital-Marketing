import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import PricingCard from "../Components/PricingCard";
import { pricingPlans, faqs } from "../data/pricing";

const Pricing = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

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
    <div style={{ backgroundColor: "#0B0911", color: "#FFFFFF", minHeight: "100vh", width: "100%", fontFamily: "system-ui, sans-serif", padding: "80px 0", boxSizing: "border-box", display: "block", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          top: "40%",
          right: "-15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
      </div>

    <div style={{ width: "calc(100% - 80px)", maxWidth: "1400px", margin: "0 auto", textAlign: "center", display: "block", position: "relative", zIndex: 10, boxSizing: "border-box" }}>
        <header style={{
          textAlign: "center",
          marginBottom: "60px",
          margin: "0 auto 60px auto",
        }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "rgba(139, 92, 246, 0.1)",
              borderRadius: "50px",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              marginBottom: "20px",
            }}>
              <span style={{
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#A78BFA",
              }}>
                ✨ Premium Plans
              </span>
            </div>

            <h1 style={{
              fontSize: "4rem",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "20px",
              textAlign: "center",
              letterSpacing: "-1px",
              textShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
              background: "linear-gradient(135deg, #A78BFA 0%, #EC4899 50%, #06B6D4 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Pricing That Scales With You
            </h1>

            <p style={{
              fontSize: "18px",
              color: "#B0B8C8",
              maxWidth: "600px",
              margin: "0 auto 40px auto",
              lineHeight: "1.6",
              textAlign: "center",
            }}>
              Choose the perfect plan for your business. All plans include a 14-day free trial, no credit card required.
            </p>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#13101C",
                borderRadius: "30px",
                padding: "8px",
                border: "1px solid rgba(139, 92, 246, 0.2)",
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsYearly(false)}
                  style={{
                    flex: 1,
                    padding: "12px 28px",
                    backgroundColor: !isYearly ? "rgba(139, 92, 246, 0.4)" : "transparent",
                    color: !isYearly ? "#FFFFFF" : "#94A3B8",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 300ms ease",
                    textShadow: !isYearly ? "0 0 10px rgba(139, 92, 246, 0.5)" : "none",
                  }}
                >
                  Monthly
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsYearly(true)}
                  style={{
                    flex: 1,
                    padding: "12px 28px",
                    backgroundColor: isYearly ? "rgba(139, 92, 246, 0.4)" : "transparent",
                    color: isYearly ? "#FFFFFF" : "#94A3B8",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 300ms ease",
                    textShadow: isYearly ? "0 0 10px rgba(139, 92, 246, 0.5)" : "none",
                  }}
                >
                  Yearly
                </motion.button>
              </div>

              {isYearly && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    borderRadius: "20px",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <span style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#10B981",
                    textShadow: "0 0 8px rgba(16, 185, 129, 0.4)",
                  }}>
                    💰 Save 17% Yearly
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </header>

        <main style={{ marginBottom: "100px" }}>
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "60px",
              width: "100%",
              margin: "0 auto 60px auto",
              boxSizing: "border-box",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </motion.div>
        </main>

        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
          marginBottom: "80px",
        }} />

        <section style={{
          maxWidth: "900px",
          margin: "0 auto 80px auto",
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              marginBottom: "15px",
              textAlign: "center",
              letterSpacing: "-0.5px",
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: "16px",
              color: "#B0B8C8",
              textAlign: "center",
            }}>
              Everything you need to know about our services
            </p>
          </motion.div>

          <motion.div
            style={{ display: "grid", gap: "15px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                style={{
                  backgroundColor: "rgba(19, 24, 38, 0.7)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 300ms ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
                  e.currentTarget.style.backgroundColor = "rgba(19, 24, 38, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.2)";
                  e.currentTarget.style.backgroundColor = "rgba(19, 24, 38, 0.7)";
                }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    color: "#FFFFFF",
                  }}
                >
                  <span style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown style={{
                      color: "#A78BFA",
                      width: "20px",
                      height: "20px",
                    }} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        padding: "0 24px 20px 24px",
                        borderTop: "1px solid rgba(139, 92, 246, 0.15)",
                        color: "#B0B8C8",
                        fontSize: "14px",
                        lineHeight: "1.7",
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "60px 40px",
            backgroundColor: "rgba(19, 24, 38, 0.6)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            borderRadius: "24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.05) 100%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "800",
              marginBottom: "15px",
              letterSpacing: "-0.5px",
            }}>
              Ready to Transform Your Business?
            </h2>

            <p style={{
              fontSize: "16px",
              color: "#B0B8C8",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}>
              Join thousands of companies already using our platform to scale their operations.
            </p>

            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <motion.button
             
                onClick={() => navigate("/booking")}


                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                  transition: "all 300ms ease",
                }}
              >
                Start Free Trial
              </motion.button>

              <motion.button
              onClick={() => navigate("/schedule-demo")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 32px",
                  backgroundColor: "rgba(139, 92, 246, 0.15)",
                  color: "#A78BFA",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                  transition: "all 300ms ease",
                }}
              >
                Schedule Demo
              </motion.button>
            </div>

            <p style={{
              fontSize: "12px",
              color: "#64748B",
              marginTop: "20px",
            }}>
              No credit card required • Instant setup • Cancel anytime
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Pricing;