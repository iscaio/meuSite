/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Geist Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'fade-in-d1': 'fadeIn 0.5s ease 0.1s forwards',
        'fade-in-d2': 'fadeIn 0.5s ease 0.2s forwards',
        'fade-in-d3': 'fadeIn 0.5s ease 0.3s forwards',
        'fade-in-d4': 'fadeIn 0.5s ease 0.4s forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
