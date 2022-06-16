module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Birthstone Bounce"','cursive']
      },
      keyframes: {
        my: {
          '0%': {padding: '8px'},
          '50%': {padding: '0px'},
          '100%': {padding: '8px'},

        }
      },
      animation: {
        'myanim': 'my 1s linear infinite'
      },
    },
  },
  plugins: [],
}