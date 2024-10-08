/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary))",
        secondary: "rgba(var(--color-secondary))",
        accent: "rgba(var(--color-accent))",
      },
      screens: {
        "tablet": "665px",
        "tablet2": "700px",
        "tablet3": "790px",
        "laptop": "1100px",
        "destop": "1315px",
        "destop2": "1600px",
      }
    },
  },
  plugins: [],
}