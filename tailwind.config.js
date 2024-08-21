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
      keyframes: {
        load: {
          '100%': { backgroundPosition: '-100% 0' },
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        load: 'load 1s infinite',
        headShake: 'headShake 1s',
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
      backgroundPosition: {
       '100-0': '100% 0',
      },
      backgroundImage: {
        'skeleton-loading': 'linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)',
      },
    },
    fontFamily: {
      SejongHospitalBold: ['SejongHospitalBold'],
      NanumSquareRegular: ['NanumSquareRegular'],
      NanumSquareBold: ['NanumSquareBold']
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#308FFF',
          error: '#407bbf',
          '.btn-primary.btn-outline:hover': {
            'color': 'white',
          },
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
