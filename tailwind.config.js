/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0B0911",
          card: "#13101C",
        },
        gradient: {
          violet: "from-violet-500 via-violet-600 to-violet-700",
          pink: "from-pink-500 via-pink-600 to-pink-700",
          cyan: "from-cyan-400 via-cyan-500 to-cyan-600",
        },
      },
      borderRadius: {
        "3xl": "32px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.3)",
        "glow-lg": "0 0 60px rgba(139, 92, 246, 0.4)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse_glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
