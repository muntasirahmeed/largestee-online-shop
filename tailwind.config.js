/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  plugins: [],
};
