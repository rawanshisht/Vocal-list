/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Define a custom color named 'background'
      },
      fontFamily: {
        "saira-condensed": ['"Saira Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
