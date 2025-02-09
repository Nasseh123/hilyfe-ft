/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        hl_green_main: "#02A24A",
      },
      maxWidth: {
        tablet: "768px",
      },
    },
  },
  plugins: [],
};
