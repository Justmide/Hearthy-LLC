// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sped: {
          primary: '#1877F3', // Facebook blue
          accent: '#1877F3',
          highlight: '#1877F3',
          mint: '#1877F3',
          gray: '#1877F3',
          light: '#1877F3',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}