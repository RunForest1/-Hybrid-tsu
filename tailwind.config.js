/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      padding: '160px',
      center: true
    },
    extend: {
      blue: {
        'primary': '#3B82F6'
      },
      white: {
        'primary': '#FFFFFF'
      },
      darks: {
        'primary': '#0B0C0D'
      },
      lightdark: {
        'primary': '#D9D9D933'
      },
      fontFamily: {
        'euclid': ['Euclid Circular B', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

