/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'nato_serif':['Noto Serif', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}