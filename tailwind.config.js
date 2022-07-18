const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      height: {
        "screen-50": "50vh",
        "screen-75": "75vh",
      },
      minHeight: {
        "screen-50": "50vh",
      },
      backgroundImage: (theme) => ({
        "neosiam-img": "url('images/neosiam-banner.jpg')",
      }),
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
