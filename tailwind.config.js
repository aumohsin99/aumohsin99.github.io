/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        "light-bg": "#ffffff", // White background for light theme
        "light-text": "#000000", // Black text for light theme
        "dark-bg": "#1a202c", // Gray-900 background for dark theme
        "dark-text": "#f7fafc", // White text for dark theme
      },
    },
  },
  plugins: [],
};
