module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    
    extend: {
    fontFamily: {
        'Roboto': ['"Roboto"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif']
        
      }, 
      colors: {
        'light-blue': '#2478CC',
        'dark-grey': '#464E5B',
        'light-white': '#F4F4F4',
        'goldenrod': '#F4AF32'
      }
    },
  },
  plugins: [],
}
