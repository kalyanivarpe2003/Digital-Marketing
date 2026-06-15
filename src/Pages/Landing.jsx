import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap, Layers, Code2, Gauge, Lock, Sparkles } from "lucide-react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navItems = ["Features", "Pricing", "Docs", "Blog"];
  const trustedCompanies = ["Stripe", "Vercel", "Linear", "Framer", "Figma", "Notion"];
  const features = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy in milliseconds with our optimized infrastructure",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: Layers,
      title: "Composable Architecture",
      description: "Build with reusable components and modular design",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      icon: Code2,
      title: "Full Control",
      description: "TypeScript support and complete API access",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 4,
      icon: Gauge,
      title: "Real-time Analytics",
      description: "Monitor performance with live dashboards",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 5,
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      id: 6,
      icon: Sparkles,
      title: "AI-Powered",
      description: "Intelligent automation and predictive insights",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0E27",
        color: "#FFFFFF",
        fontFamily: "'Inter', 'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "5%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: "900px",
            height: "900px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
        `}</style>
      </div>

      <nav
        style={{
          position: "relative",
          zIndex: 100,
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(10, 14, 39, 0.8)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: "24px",
              fontWeight: "900",
              background: "linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
            }}
          >
            ⚡ LaunchHub
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: "32px",
              display: window.innerWidth > 768 ? "flex" : "none",
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ color: "#3B82F6" }}
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#B0B8C8",
                  cursor: "pointer",
                  transition: "color 300ms ease",
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#B0B8C8",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 300ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.color = "#B0B8C8";
            }}
          >
            Sign In
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "10px 24px",
              background: "linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Get Started
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth > 768 ? "none" : "flex",
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 10 }}>
        <section
          style={{
            minHeight: "calc(100vh - 70px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#3B82F6",
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  ✨ Introducing LaunchHub v2.0
                </span>
              </div>

              <h1
                style={{
                  fontSize: "64px",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "24px",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #A0AABE 50%, #3B82F6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-2px",
                }}
              >
                Launch Apps Faster, Not Just Prototypes
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#B0B8C8",
                  lineHeight: "1.6",
                  marginBottom: "40px",
                  maxWidth: "600px",
                  margin: "0 auto 40px auto",
                }}
              >
                Build, deploy, and scale production-ready applications in hours. No more lengthy development cycles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                maxWidth: "600px",
                margin: "0 auto 60px auto",
              }}
            >
              <div
                style={{
                  position: "relative",
                  padding: "2px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 100%)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0F1632",
                    borderRadius: "11px",
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Describe your app idea..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                      flex: 1,
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 16px",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>
                  TRUSTED BY LEADING COMPANIES
                </div>
                <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                  {trustedCompanies.map((company) => (
                    <span key={company} style={{ fontSize: "13px", color: "#94A3B8", fontWeight: "600" }}>
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          style={{
            padding: "100px 20px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "900",
                marginBottom: "16px",
                letterSpacing: "-1px",
              }}
            >
              Everything You Need
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#B0B8C8",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Powerful features designed for modern teams
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  style={{
                    backgroundColor: "rgba(20, 25, 50, 0.8)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 300ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                    e.currentTarget.style.backgroundColor = "rgba(20, 25, 50, 1)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(59, 130, 246, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    e.currentTarget.style.backgroundColor = "rgba(20, 25, 50, 0.8)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: `linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(168, 85, 247) 100%)`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <Icon size={24} color="#FFFFFF" />
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#B0B8C8",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: "rgba(30, 30, 60, 0.5)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "20px",
              padding: "60px 40px",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "900",
                marginBottom: "16px",
                letterSpacing: "-0.5px",
              }}
            >
              Ready to Launch?
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#B0B8C8",
                marginBottom: "32px",
              }}
            >
              Join thousands of developers building the future with LaunchHub
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                Start Free Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "#3B82F6",
                  border: "2px solid rgba(59, 130, 246, 0.5)",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 1)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.currentTarget.style.color = "#3B82F6";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "40px 20px",
          textAlign: "center",
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        <p>© 2024 LaunchHub. All rights reserved. Built with ⚡ for the future.</p>
      </footer>
    </div>
  );
};

export default Landing;
