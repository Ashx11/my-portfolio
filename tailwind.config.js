/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fill: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        fill: "fill 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
