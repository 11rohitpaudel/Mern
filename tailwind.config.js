/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        screens:{
          "2xl": "800px"
        }
      }
    },
  },
  plugins: [],
}

