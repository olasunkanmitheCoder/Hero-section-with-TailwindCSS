/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*html"
  ],
  theme: {
    fontFamily: {
      serif: ['Crimson Text', 'serif'],
        sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: { 
        herowine: "#920038",
        herolightwine: "#FF7BE5"
      }
    }
  },
  plugins: [],
}
