const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    fontFamily: {
      'lato': ['Lato'],
      'roboto': ['Roboto']
    },
    extend: {
      colors: {
        red: {
          ...colors.red,
          '400': '#C45352',
        }
      },
      spacing: {
        '2screen': '200vw',
        '1/3-screen': '23vw',
        '1/2-screen': '42vw',
        '3/4-screen': '75vw'
      },
      height: {
        'inherit': 'inherit'
      },
      padding:{
        '1v': '1vh',
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '1v': '1vh',
      },
      lineHeight: {
        '2loose': '3'
      },
      zIndex: {
        '-1': '-1'
      },
      boxShadow: {
        'red': '0 0 8px 0 #cc6666',
        'full-inset-pink': 'inset 100vh 0 0 0  rgba(204, 102, 102, 0.47)'
      }
    }
  },
  variants: {},
  plugins: []
}
