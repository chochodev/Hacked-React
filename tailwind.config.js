/** @type {import('tailwindcss').Config} */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter&family=Poppins&family=Russo+One&family=Source+Code+Pro&display=swap');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

