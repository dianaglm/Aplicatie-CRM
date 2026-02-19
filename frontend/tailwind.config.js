/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandPink: {
          DEFAULT: '#EC4899',
          dark: '#F472B6',
        },
        darkBg: '#0F172A',
        darkCard: '#1E293B',
      }
    },
  },
  plugins: [],
}