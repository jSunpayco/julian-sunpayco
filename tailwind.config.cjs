module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,vue}"],
  theme: {
    container:{
      center: true
    },
    screens:{
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'customGreenDarker': '#395144',
        'customGreenDark': '#4E6C50',
        'customBeigeDarker': '#AA8B56',
        'customBeigeDark': '#F0EBCE',
        'customBeigeLight': '#E6E4D7',
        'customRetroGreen': '#4E7C71',

        'customLavender' : '#F6E8EA',
        'customRose' : '#DB3C26',
        'customRaisin': '#22181C',
        'customJet': '#312F2F',
        'customMint': '#84DCCF'
      },
      backgroundImage:{
        'Grad': "url(/images/Grad.png)"
      }
    },
  },
  plugins: [],
}
