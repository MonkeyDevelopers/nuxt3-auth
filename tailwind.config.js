/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#1242bd',
        },
        primaryDark:{
          DEFAULT: '#0a2770',
        },
        secondary: "#f97316",
        accent: "#E53E3E",
        white: "#FFFFFF",
        black: "#020817",
        counter: '#0B111F',
      },
      fontFamily: {
        sans: ["Satoshi-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
}
