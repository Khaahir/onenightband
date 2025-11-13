/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#e63946',
        background: '#0b0b0b'
      }
    }
  },
  plugins: []
}
