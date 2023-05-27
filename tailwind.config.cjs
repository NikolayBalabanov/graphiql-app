/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '1px'],
      },
      colors: {
        btnBG: '#E6EDDA',
        textColorHover: '#a7bf82',
        btnBGHover: '#3b492b',
        textColor: '#3b492b',
        BGcolor: '#f4f7ee',
        BGcolor1: '#E6EDDA',
        BGcolor2: '#c3d4a7',
        BGColorWhite: '#fff',
        bgModal: 'rgba(20, 19, 19, 0.8);',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
