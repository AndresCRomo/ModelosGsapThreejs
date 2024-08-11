/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFde59",
        secondary: "#040303",
        third: "#3A4E48",
        fourth: "#6A7B76",
        fifth: "#c3ccc8",

      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        intro: ["Intro", "sans-serif"],
      },
     
    },
  },
  plugins: [],
}

