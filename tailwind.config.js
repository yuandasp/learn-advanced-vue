/** @type {import('tailwindcss').Config} */
export default {
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  // content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
    },
    gridAutoColumns: { "70/30": "70% 28%" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
