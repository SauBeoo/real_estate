/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'w-0',
    'w-full',
    'h-[3px]',
    'bg-orange-500',
    'from-primary',
    'to-accent',
    'from-accent',
    'to-darkAccent',
    'via-darkBlue',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-clip-text',
    'text-transparent'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A376A',
        secondary: '#E8F0FE',
        accent: '#FF7A00',
        darkAccent: '#E56D00',
        darkBlue: '#0F2A5A',
        lightOrange: '#FFEBD6',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        floatText: 'floatText 8s ease-in-out infinite',
        wave: 'wave 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        floatText: {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        wave: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 