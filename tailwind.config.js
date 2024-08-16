/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFde59",
        secondary: "#040303",
        third: "#3A4E48",
        fourth: "#6A7B76",
        fifth: "#c3ccc8",

        "candy-corn": {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff789",
          300: "#ffed59",
          400: "#fdda12",
          500: "#ecc006",
          600: "#cc9502",
          700: "#a36a05",
          800: "#86530d",
          900: "#724411",
          950: "#432305",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        intro: ["Intro", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
};
