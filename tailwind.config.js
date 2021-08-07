const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3f0e40",
        backGround: "#F8F8F8",
        black: "#000000",
        black2: "#757575",
        white: "#FEFEFE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
