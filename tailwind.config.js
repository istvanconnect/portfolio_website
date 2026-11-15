/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        surface: "#171717",
        accent: "#c5ff4a",
        foreground: "#f3f1eb",
        muted: "#9b9a95",
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "DM Sans", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tighter2: "-0.095em",
      },
      boxShadow: {
        glow: "0 0 55px rgba(197, 255, 74, 0.12)",
      },
    },
  },
  plugins: [],
};
