const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3f0e40",
        primaryDark: "#2d092e",
        backGround: "#F8F8F8",
        white: "#FEFEFE",
        black: {
          DEFAULT: "#000000",
          50: "#DADADA",
          100: "#CDCDCD",
          200: "#B3B3B3",
          300: "#9A9A9A",
          400: "#818181",
          500: "#676767",
          600: "#484848",
          700: "#2A2A2A",
          800: "#0B0B0B",
          900: "#000000",
        },
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
