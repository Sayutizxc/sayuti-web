module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      screens: {
        xs: '540px',
      },
      fontFamily: {
        scheherazade: "'Scheherazade New', serif",
      },
      animation: {
        scale: 'scale 4s infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%, 100%': {
            transform: 'scale(1) rotate(5deg)',
          },
          '50%': {
            transform: 'scale(1.2) rotate(-5deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
