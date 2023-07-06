/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent1: '#007148',
        accent2: '#4CA346',
        offWhite: '#F8ECE5',
        caption: '#7D7873',
        body: '#0D2329',
        greyStrong: '#272625',
        greyMedium: '#9D9995',
        white: '#FFFFFF',
        black: '#1E1B18',
        red: '#F44336',
      },
    },
  },
  plugins: [],
}
