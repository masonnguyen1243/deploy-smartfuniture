/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // tailwind.config.js
  extend: {
    keyframes: {
      shine: {
        "0%": { left: "-75%" },
        "100%": { left: "125%" },
      },
    },
    animation: {
      shine: "shine 0.8s ease-in-out forwards",
    },
  },
};
