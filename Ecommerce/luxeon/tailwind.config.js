/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        orange: '#F97316',
        surface: '#F8F9FA',
        border: '#E5E7EB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(30, 58, 95, 0.08)',
      },
    },
  },
  plugins: [],
}
