import colors from 'tailwindcss/colors';

// Accent ramps (sky, cyan, blue) are mapped to the crimson palette, so components keep their accent class names while the theme stays black and crimson.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: colors.red,
        cyan: colors.red,
        blue: colors.red,
        navy: {
          950: '#050505',
          900: '#0c0909',
          800: '#151011',
          700: '#22181a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
