/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }, 
      colors: {
        "dark-grey": 'hsl(234, 29%, 20%)'
      }
    },
  },
  plugins: [],
}