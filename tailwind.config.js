/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cafe-brown': '#8B4513',
        'cafe-cream': '#F5F5DC',
        'cafe-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'sans-serif'],
        serif: ['SF Pro Text', 'serif'],
      },
    },
  },
  plugins: [],
} 