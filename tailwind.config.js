/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      backgroundImage: {
        "light-pattern": "url(/assets/imgs/mainsvg.svg)",
        "post": "url('/assets/imgs/post.png')",
        "blurpost": "url('/assets/imgs/blurpost.png')",
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
        'cabin': ['Cabin', 'sans-serif'],
        'Euclid': ['Euclid Circular B', 'sans-serif']
      }
    },
  },
  plugins: [],
}

