/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    screens: {
      sm: {'max': '424.99px'},
      md: {'max': '767.99px'},
      lg: {'max': '991.99px'},
      xl: {'max': '1023.99px'},
      xxl: {'max': '1439.99px'}
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': {transform: "translateY(-10px)", opacity: '0' },
          '100%': {transform: "translateY(0px)", opacity: '1' },
        },
        openMenu: {
          '0%': {transform: 'scaleX(0)' },
          '100%': {transform: 'scaleX(1)' },
        },
      },
      animation: {
        'slide-down': "slideDown 0.2s linear",
        'open-menu' : "openMenu 0.5s ease-in-out forwards",
      }, 
      backgroundImage: {
        "light-pattern": "url(/assets/imgs/mainsvg.svg)",
        "small-light-pattern": "url(/assets/imgs/smallmainsvg.svg)",
        "post": "url('/assets/imgs/post.png')",
        "blurpost": "url('/assets/imgs/blurpost.png')",
        "hero": "url('./assets/imgs/hero.svg')"
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

