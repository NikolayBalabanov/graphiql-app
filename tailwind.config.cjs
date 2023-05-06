/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        btnBG: "#E6EDDA",
        textColorHover: "#a7bf82",
        btnBGHover: "#3b492b",
        textColor: "#3b492b",
        BGcolor: "#f4f7ee",
        BGcolor1: "#E6EDDA",
        bgModal: "rgba(20, 19, 19, 0.8);",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
