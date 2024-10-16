/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      centered: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#06C2AE",
          200: "#02889B",
        },
        secondary: "#FF693A",
      },
    },
  },
  plugins: [],
};
