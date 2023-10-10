/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      backgroundImage: {
        "light-pattern": "url(img/mainsvg.svg)"
      },
      colors: {
        'secondary': '#7B4AE2'
      },
      backgroundColor: {
        'primary': '#090E16'
      },
      borderColor: {
        'primary': '#57A4FF'
      },
      textColor: {
        'primary': '#57A4FF'
      },
      gradientColorStops: {
        'primary': '#3B82F6',
        'secondary': '#1E40AF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}

