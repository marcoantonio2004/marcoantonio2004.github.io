/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // ← IMPORTANTE: va aquí arriba, NO dentro de theme.extend

  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    "./public/**/*.html"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0ea5a4",
        accent: "#f59e0b"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    },
  },

  plugins: [],
};
