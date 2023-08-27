/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'tw-',
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1280px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontSize: {
      'microXs': '0.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    letterSpacing: {
      widestL:'0.5em'
    },
    extend: {
      colors: {
        bgSTC: '#3A0E65',
        bgSTCgraay:'#F1F1F1',
        lightPurple: '#faf5ff',
        coral: '#FF375E',
        coralLight: '#FFDEE4',
        coralLight2: '#FFECF0',
        whiteLight1: '#FAF5FF',
        greenStc: '#159E0B',
        flashing:`rgba(255 255 255 / 0.219);`
      },
      width: {
        'fit': "fit-content"
      },
      minWidth: {
        14: "1.875rem",
        16: "2rem",
        17: "2.5rem",
        110: "6.875rem",
        160: "10rem",
        40: "40vw",
      },
      maxWidth: {
        16: "2rem",
        18: "3rem",
        130:"8.125rem"
      },
      minHeight: {
        248: "15.5rem",
        16: "2rem",
        465:"29.63rem"
      },
      boxShadow: {
        xl3: '0px 6px 20px #DCDCDC69',
        charts:'0px 2px 6px #0000000A',
        none0: '0'
      },
      spacing: {
        99: '-2.25rem',
        44: '-1rem',
        45: '-1.5rem',
        13: '-3.125rem',
        '0.25': '-0.25rem',
        11: '-0.188rem',
      }
    },
  },

};
