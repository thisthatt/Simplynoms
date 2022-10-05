/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./public/styles/**/*.{css}",
    "./views/**/*.ejs",
  ],
  theme: {
    colors: {
      main: {
        DEFAULT: "hsl(11, 92%, 49%)",
        light: "hsl(12, 88%, 69%)",
        light2: "hsl(12, 88%, 95%)",
      },
      secondary: "hsl(228, 39%, 23%)",
      themeDarkGrayishBlue: "hsl(227, 12%, 61%)",
      themeVeryDarkBlue: "hsl(233, 12%, 13%)",
      pale: "hsl(13, 100%, 96%)",
      themeVeryLightGray: "hsl(0, 0%, 98%)",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern:
  //       /(bg|text|border)-theme(Red|RedLight|RedSupLight|Blue|DarkGrayishBlue|VeryDarkBlue|VeryPaleRed|VeryLightGray)/,
  //   },
  // ],
};
