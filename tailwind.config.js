/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobgImg: "url('/dist/img/png/headerBg.png')",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
