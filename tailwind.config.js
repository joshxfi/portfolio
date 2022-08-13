/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri", "serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: "#F9F9F9",
        secondary: {
          50: "#AEAEAE",
          100: "#181A18",
          200: "#0C0E0C",
        },
      },
    },
  },
  plugins: [],
};
