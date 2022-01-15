module.exports = {
  content: [
    "./src/**/*.{html,js,ts,css}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        '-blog-header-pattern': "url('/assets/blog-header.png')",
      },
      colors: {
        'body': '#F8FAFC',
        'btn-blue': '#3679F6',
        'link-hover': '#2056AE',
        'boder-color': '#E2E8F0',
        'light-black': '#334155',
      },
      spacing: {
        '5px': '5px',
        '7.5': '1.875rem',
        '11.5': '2.875rem',
        '15': '3.75rem',
        '26': '6.375rem',
        '33': '8.25rem'
      },
      borderRadius: {
        '10px': '10px',
        '15px': '15px',
      }
    },
  },
  plugins: [],
}