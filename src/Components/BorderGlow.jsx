import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const BorderGlow = ({
  children,
  edgeSensitivity = 40,
  glowRadius = 50,
  glowIntensity = 1.4,
  coneSpread = 30,
  animated = true,
  className = "",
  borderColor = "from-violet-500 to-pink-500",
  innerGradient = false,
}) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      if (!animated) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: -100, y: -100 });
    };

    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [animated]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Border glow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isHovering
            ? `radial-gradient(circle ${glowRadius}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, ${0.4 * glowIntensity}), transparent 80%)`
            : "none",
          filter: `blur(8px)`,
        }}
      />

      {/* Static gradient border */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${borderColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Inner content wrapper */}
      <div className="absolute inset-0 rounded-3xl bg-dark-card border border-white/10 opacity-0" />

      {/* Content */}
      <div className="relative z-10 rounded-3xl bg-dark-card/95 backdrop-blur-xl border border-white/10 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export default BorderGlow;
