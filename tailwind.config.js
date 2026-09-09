/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#fcfcfc',
        'dark-text': '#333333',
        'blue-accent': '#2563eb',
        'blue-dark': '#1d4ed8',
        'soft-gray': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Alexandria', 'sans-serif'],
        handwriting: ['"Chelsea Market"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin-slow': 'reverse-spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      }
    },
  },
  plugins: [],
}
