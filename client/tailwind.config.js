module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    
    extend: {
    fontFamily: {
        'Roboto': ['"Roboto"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif']
      }, 
      colors: {
        'light-blue': '#2478CC',
        'dark-grey': '#464E5B',
        'light-white': '#F4F4F4',
        'goldenrod': '#F4AF32',
        'blue-border': '#2478CC', 
        'golden-button': '#FFC700',
        'progress-background': '#EFF6FA',
        'progress-green': '#0C9C00',
      },
      boxShadow: {
        'sideBar': '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
      }
    },
  },
  plugins: [],
}
