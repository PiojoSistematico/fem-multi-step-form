/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#02295a",
        "primary-2": "#473dff",
        "primary-3": "#adbeff",
        "primary-4": "#bfe2fd",
        "primary-5": "#ed3548",
        "neutral-1": "#9699ab",
        "neutral-2": "#d6d9e6",
        "neutral-3": "#f0f6ff",
        "neutral-4": "#fafbff",
        "neutral-5": "#ffffff",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
