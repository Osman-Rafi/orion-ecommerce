const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
