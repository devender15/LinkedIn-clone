/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'color-border-low-emphasis': 'rgba(0, 0, 0, 0.3)',
        'color-button-container-tertiary': 'rgba(0, 0, 0, 0.04)',
      },
      borderColor: {
        'input-border': 'rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}

