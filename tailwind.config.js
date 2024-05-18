/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-60%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        drop: 'drop 1s ease-out',
      },
    },
  },
  plugins: [],
}

