/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Handjet': ['Handjet', 'sans-serif']
      },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': ['3rem', {
        lineHeight: '2.25rem',
        fontWeight: '700'
      }],
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  }
  },
  plugins: [],
}

