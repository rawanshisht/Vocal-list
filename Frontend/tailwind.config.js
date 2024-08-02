/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#F7A072",
        "custom-orange-dark": "#E68A5A",
      },
      fontFamily: {
        "saira-condensed": ['"Saira Condensed"', "sans-serif"],
      },
      fontSize: {
        130: "130px",
        40: "40px",
        100: "100px",
      },
    },
  },
  plugins: [daisyui],
};
