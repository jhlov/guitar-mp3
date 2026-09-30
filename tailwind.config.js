/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#0a0e17",
          surface: "#121926",
          card: "#182234",
          cardHover: "#1f2c42",
          border: "#25334d",
          borderLight: "#334566",
          accent: "#f59e0b",
          accentLight: "#fbbf24",
          accentGlow: "rgba(245, 158, 11, 0.25)",
          secondary: "#06b6d4",
          textMuted: "#94a3b8",
          textDim: "#64748b"
        }
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Titillium Web'", "'Noto Sans KR'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px -3px rgba(245, 158, 11, 0.3)",
        card: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  },
  plugins: []
};

