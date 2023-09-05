/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:"#949CC0",
          200:"#CACFE3",
          300:"#2B2B2B",
          400:"#4062FF",
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}