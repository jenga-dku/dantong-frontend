/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#308FFF',
      },
      fontSize: {
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },
    },
    fontFamily: {
      SejongHospitalBold: ['SejongHospitalBold'],
      SejongHospitalLight: ['SejongHospitalLight'],
      NanumSquareRegular: ['NanumSquareRegular'],
      NanumSquareBold: ['NanumSquareBold'],
      NanumSquareEB: ['NanumSquareEB'],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#308FFF',
          '.btn-primary.btn-outline:hover': {
            'color': 'white',
          },
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
