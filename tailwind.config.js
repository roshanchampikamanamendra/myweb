/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#819afc',
          500: '#6474f7',
          600: '#5152eb',
          700: '#4338d1',
          800: '#1E3A8A',
          900: '#1e2e70',
        },
        teal: {
          50: '#effcf6',
          100: '#d7f9e9',
          200: '#b3f1d3',
          300: '#7fe4b6',
          400: '#3dd08d',
          500: '#22b573',
          600: '#0F766E',
          700: '#0d6052',
          800: '#0f4c44',
          900: '#0f3c37',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
    },
  },
  plugins: [],
};