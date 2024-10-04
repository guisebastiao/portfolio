/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      screens: {
        "max-830": { max: "830px" },
        "max-545": { max: "545px" },
        "max-500": { max: "500px" },
      }
    },
  },
  plugins: [],
}

