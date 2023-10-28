/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "#02295a",
        "purplish-blue": "#473dff",
        "pastel-blue": "#adbeff",
        "light-blue": "#bfe2fd",
        "strawberry-red": "#ed3548",
        "cool-gray": "#9699ab",
        "light-gray": "#d6d9e6",
        Magnolia: "#f0f6ff",
        Alabaster: "#fafbff",
      },
      fontFamily: {
        league: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
