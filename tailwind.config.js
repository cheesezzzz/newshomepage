/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      'soft-orange': '#e9ab53',
      'soft-red': '#f15e50',
      'off-white': '#fffdfa',
      'grayish-blue': '#c5c6ce',
      'dark-grayish-blue': '#5d5f79',
      'very-dark-blue': '#00001a',
    },
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
