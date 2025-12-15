module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#287094',      // Main accent, buttons, links
        secondary: '#023246',    // Headers, nav, strong accents
        background: '#F6F6F6',   // Main background
        card: '#D4D4CE',         // Card/section backgrounds
        text: {
          DEFAULT: '#023246',   // Main text
          accent: '#287094',     // Accent text/links
          light: '#333333',      // For contrast on light backgrounds
        },
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}; 