/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#FAFAF8',
        'brand-sage': '#8A9A86',
        'brand-peach': '#FFDAB9',
        'brand-dark': '#333333',
        'brand-light-sage': '#E3E8E1',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
