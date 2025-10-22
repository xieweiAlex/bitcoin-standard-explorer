/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bitcoin-orange': '#F7931A',
        'title-color': '#2D3748',
        'content-color': '#4A5568',
        'description-color': '#718096',
        'quiz-color': '#553C9A',
        'quiz-bg': '#EBF4FF',
        'quiz-accent': '#805AD5'
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'title': ['Merriweather', 'Georgia', 'serif'],
        'content': ['Inter', 'system-ui', 'sans-serif'],
        'description': ['Open Sans', 'system-ui', 'sans-serif'],
        'quiz': ['Montserrat', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}