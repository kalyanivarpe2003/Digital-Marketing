import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiX } from "react-icons/fi";
import BorderGlow from "../Components/BorderGlow";

const PricingCard = ({ plan, isYearly, index }) => {
  const navigate = useNavigate();
  const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const savings = isYearly ? Math.round((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12) * 100) : 0;

  const gradientMap = {
    "from-blue-500 to-cyan-500": "#06B6D4",
    "from-violet-500 via-purple-500 to-pink-500": "#8B5CF6",
    "from-orange-500 via-red-500 to-pink-500": "#EA580C",
  };

  const borderHexColor = gradientMap[plan.gradient] || "#8B5CF6";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        minHeight: "600px",
        display: "inline-block",
        verticalAlign: "top",
      }}
    >
      {plan.popular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          style={{
            position: "absolute",
            top: "-35px",
            left: "35%",
            transform: "translateX(-50%)",
            zIndex: 30,
          }}
        >
          <div style={{
            padding: "8px 20px",
            background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
            borderRadius: "50px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#FFFFFF",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}>
            🔥 MOST POPULAR
          </div>
        </motion.div>
      )}

      <BorderGlow
        borderColor={borderHexColor}
        edgeSensitivity={40}
        glowRadius={50}
        glowIntensity={plan.popular ? 2 : 1.2}
        coneSpread={30}
        animated={true}
        style={{
          width: "100%",
          display: "block",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#13101C",
            border: plan.popular ? "2px solid #8b5cf6" : "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "35px 25px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            transition: "all 300ms ease",
            minHeight: "600px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = plan.popular ? "rgba(139, 92, 246, 0.8)" : "rgba(139, 92, 246, 0.5)";
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = plan.popular ? "0 20px 60px rgba(139, 92, 246, 0.3)" : "0 10px 40px rgba(139, 92, 246, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = plan.popular ? "2px solid #8b5cf6" : "1px solid rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = plan.popular ? "0 10px 40px rgba(139, 92, 246, 0.15)" : "none";
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, transparent 50%, rgba(236, 72, 153, 0.03) 100%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: "25px" }}>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#FFFFFF",
                  marginBottom: "8px",
                  letterSpacing: "-0.5px",
                  textShadow: plan.popular ? "0 0 15px rgba(139, 92, 246, 0.3)" : "none",
                  margin: "0 0 8px 0",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B0B8C8",
                  lineHeight: "1.5",
                  margin: "0",
                }}
              >
                {plan.description}
              </p>
            </div>

            <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid rgba(139, 92, 246, 0.15)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontSize: "44px",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #A78BFA 0%, #EC4899 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-1px",
                    margin: "0",
                  }}
                >
                  ₹{displayPrice}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#B0B8C8",
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  /{isYearly ? "yr" : "mo"}
                </span>
              </div>

              {isYearly && savings > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#10B981",
                    textShadow: "0 0 8px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  Save {savings}%
                </motion.div>
              )}

              <p
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  marginTop: "10px",
                  fontStyle: "italic",
                  margin: "10px 0 0 0",
                }}
              >
                {plan.popular
                  ? `14 days free, then ₹{plan.monthlyPrice}/month`
                  : `Billed ₹{isYearly ? "annually" : "monthly"}`}
              </p>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: "100%",
                padding: "14px 20px",
                background: plan.popular
                  ? "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
                  : "rgba(139, 92, 246, 0.15)",
                color: plan.popular ? "#FFFFFF" : "#A78BFA",
                border: plan.popular ? "none" : "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                marginBottom: "20px",
                boxShadow: plan.popular ? "0 0 20px rgba(139, 92, 246, 0.4)" : "none",
                letterSpacing: "0.5px",
                transition: "all 300ms ease",
              }}
              onClick={() => navigate("/booking", { state: { plan } })}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(139, 92, 246, 0.6)";
                } else {
                  e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.25)";
                }
              }}
              onMouseLeave={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.4)";
                } else {
                  e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.15)";
                }
              }}
            >
              {plan.cta}
            </motion.button>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "#A78BFA",
                  marginBottom: "15px",
                  textShadow: "0 0 8px rgba(139, 92, 246, 0.3)",
                  margin: "0 0 15px 0",
                }}
              >
                ✓ What's Included:
              </p>

              <div style={{ display: "grid", gap: "12px" }}>
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    {feature.included ? (
                      <FiCheck
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "#10B981",
                          marginTop: "2px",
                          flexShrink: 0,
                          filter: "drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))",
                        }}
                      />
                    ) : (
                      <FiX
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "#64748B",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontSize: "13px",
                        color: feature.included ? "#E2E8F0" : "#64748B",
                        textDecoration: feature.included ? "none" : "line-through",
                        lineHeight: "1.4",
                        margin: "0",
                      }}
                    >
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
};

export default PricingCard;