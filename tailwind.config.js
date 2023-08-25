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
          DEFAULT: '#3b82f6',
        },
        primaryDark:{
          DEFAULT: '#2563eb',
        },
        secondary: "#f97316",
        accent: "#E53E3E",
        white: "#FFFFFF",
        black: "#121212",
      },
      fontFamily: {
        sans: ["Satoshi-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
}
