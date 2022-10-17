/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif'],
      serif: ['Fraunces', 'ui-serif'],
    },
    extend: {
      colors: {
        gunmetal: '#1C232B',
        aurometal: '#6C7289',
        deepAqua: '#3D8168',
        deepAquaHover: '#1A4032',
        cream: '#f2f2f2',
      },
      backgroundImage: {
        mobileBg: "url('./images/image-product-mobile.jpg')",
        desktopBg: "url('./images/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
