/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB682E",
        backgroundColor: "#2F3B8E",
      }
    },
  },
  plugins: [],
}

