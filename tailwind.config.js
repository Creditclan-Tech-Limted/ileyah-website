/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fff6da',
          100: '#ffeaad',
          200: '#ffe17d',
          300: '#ffdc4b',
          400: '#ffd91a',
          500: '#e6c800',
          600: '#b38f00',
          700: '#805e00',
          800: '#4d3400',
          900: '#1c0f00',
        },
        'secondary': "#F6D600"
      },
      container: {
        padding: '2rem',
        center: true,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nunito: "Nunito Sans, sans-serif",
        fontAwesome: "Font Awesome 6 Free",
      },
    },
  },
  plugins: [],
}
