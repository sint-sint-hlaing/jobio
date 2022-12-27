/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        opensans : ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        "search": "url('https://www.ibrahima-ndaw.com/static/8a32a4f3733f491438295f8b8af0e47c/6db29/cover.png')"
      },
    },
  },
  plugins: [],
}