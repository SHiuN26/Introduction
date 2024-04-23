/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Alfa: ["Alfa Slab One", "serif"],
        Noto: ["Noto Sans TC"],
        Alfa: ["Alfa Slab One"],
      },
    },
  },
  plugins: [],
};
