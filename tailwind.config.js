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
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        primary: "0 0 1.5rem rgba(63, 14, 64, 0.75)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
