/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        hl_green_main: "#02A24A",
        hl_blue_main: "#0391E0",
        hl_yellow_main: "#FF9316",
      },
      maxWidth: {
        tablet: "768px",
      },
    },
  },
  plugins: [],
};
