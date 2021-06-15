module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['Belleza', 'sans-serif'],
      sans: ['Raleway', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        light: '#F3F3F3',
        default: '#EDEDED',
        dark: '#828282',
      },
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        light: 'rgba(244, 179, 195, 0.5)',
        default: '#D05875',
      },
      secondary: {
        light: 'rgba(155, 212, 193, 0.5)',
        default: '#9BD4C1',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
