module.exports = {
  content: [
    "./src/**/*.{html,js,ts,css}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        '-blog-header-pattern': "url('/assets/blog-header.png')",
        '-blog-header-pattern-md': "url('/assets/blog-header-md.png')",
        '-equipment-header-pattern-md': "url('/assets/Union.png')",
        '-equipment-header-pattern': "url('/assets/equipment.png')",
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
        '12.5': '3.125rem',
        '15': '3.75rem',
        '26': '6.375rem',
        '33': '8.25rem'
      },
      screens: {
        '3xl': '2000px',
        '4xl': '2400px'
      }
      ,
      borderRadius: {
        '10px': '10px',
        '15px': '15px',
      }
    },
  },
  plugins: [],
}