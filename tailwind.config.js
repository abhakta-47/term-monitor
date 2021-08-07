const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3f0e40",
        primaryDark: "#2d092e",
        backGround: "#F8F8F8",
        white: "#FEFEFE",
        black: "#000000",
        blackLighter: "#757575",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
