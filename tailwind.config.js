/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"
],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'darkblue' : '#1a2633',
      'wheatss' : 'rgba(245, 222, 179, 0.986)',
      'blueish' : '#234e70 ',
      'white': '#ffffff',
      'black' : '#020617',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'slate' : {
        50 : '#f8fafc',
        100 : '#f1f5f9',
        200 : '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      }
    }
  },
  plugins: [],
}

