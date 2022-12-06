/** @type {import('tailwindcss').Config} */
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
        'customBeigeLight': '#E4DBA7'
      }
    },
  },
  plugins: [],
}
