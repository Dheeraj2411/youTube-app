/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: { max: "412px" },
        sm: "412px",
        mmd: { max: "760px" },
        mg: "760px",
      },
    },
  },
  plugins: [],
};
