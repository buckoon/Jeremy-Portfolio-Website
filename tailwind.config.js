/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
screens: {
  xs: "480px",
  ss: "620px",
  sm: "768px",
  md: "1060px",
  lg: "1200px",
  xl: "1700px",
},

  
};
