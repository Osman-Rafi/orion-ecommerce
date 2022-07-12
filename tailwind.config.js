const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        "mid-purple": "#725c81",
      },
      height: {
        "screen-50": "50vh",
        "screen-75": "75vh",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
