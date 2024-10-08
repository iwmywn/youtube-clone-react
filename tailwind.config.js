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
      }
    },
  },
  plugins: [],
}