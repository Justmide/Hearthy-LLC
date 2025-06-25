// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sped: {
          primary: '#2C3E50',
          accent: '#3498DB',
          highlight: '#074359',
          mint: '#A3E4D7',
          gray: '#7F8C8D',
          light: '#f4f9f8',
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