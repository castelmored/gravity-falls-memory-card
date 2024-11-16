/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        potta: ["Potta One", "sans-serif"],
      },
      textColor: { primary: "#a1ac82" },
      colors: {
        grayish: "#a1ac82",
      },
    },
  },
  plugins: [],
};
