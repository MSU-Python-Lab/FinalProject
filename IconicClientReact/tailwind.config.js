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
        pop: {
          '0%': {opacity: '1.0'},
          '0%': {opacity: '0.3'},
          '10%': { opacity: '1.0'},
          '20%': { opacity: '0.3' },
          '30%': { opacity: '1.0' },
          '40%': { opacity: '0.6' },
          '100%': { opacity: '1.0' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(-2.0deg)' },
          '70%': { transform: 'rotate(6.0deg)' },
          '80%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 3s linear infinite',
        'popik': 'pop 1s linear infinite',
      },
    },
  },
  plugins: [],
}