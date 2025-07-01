/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
    './theme.config.js'
  ],
  theme: {
    extend: {
      colors: {
        aifano: '#0B3C5D',
        primary: '#1D4ED8',      // Diğer yazılar için ana renk
        secondary: '#6B7280'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
