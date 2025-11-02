/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        darkbrown: "#3b2f2f",
        beige: "#f5f5dc",
      },
    },
  },
  plugins: [],
};
