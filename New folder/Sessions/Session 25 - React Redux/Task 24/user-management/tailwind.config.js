/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'main-section-color': 'rgb(248, 250, 251)',
        'add-user-button-color': '#22A565',
        'add-user-modal-header-color': 'rgb(5, 14, 45)'
      }
    },
  },
  plugins: [],
});
