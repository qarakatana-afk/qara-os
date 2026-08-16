/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        warm: {
          50: "#fdf8f3",
          100: "#f9ede0",
          200: "#f2d9c0",
          300: "#e8c09a",
          400: "#d9a070",
          500: "#c97e4a",
          600: "#b06030",
          700: "#8c4820",
          800: "#6a3318",
          900: "#4a2210",
        },
      },
    },
  },
  plugins: [],
};
