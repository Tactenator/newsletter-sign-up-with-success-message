/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }, 
      colors: {
        "dark-grey": 'hsl(234, 29%, 20%)', 
        "tomato": 'hsl(4, 100%, 67%)', 
        'light-tomato': '#ff5b61'
      }
    },
  },
  plugins: [],
}