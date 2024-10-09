/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {

      colors: {
        customRed: 'rgba(253, 89, 86, 1)',
        
          customBlack: 'rgba(2, 5, 2, 1)', 
          customGreen: 'rgba(67, 160, 71, 1)',
        customDarkgreen: 'rgba(22, 53, 24, 1)',
        lightGrey: "rgba(159, 159, 159, 1)",
        customOrange:"rgba(255, 243, 227, 1)",
        lighterOrange:"rgba(252, 248, 243, 1)",
        lightOrangetwo: "rgba(250, 243, 234, 1)"
      },
      fontFamily: {
        poppines: ['Poppins', 'sans-serif'],
      },

      width: {
        '285': '285px', // Custom width class
      },

      height: {
        '301': '301px'},
      fontFamily:{
        poppines: "Poppins", 
      },
      lineHeight: {
        'custom': ['52.27px',  '22.72px']
      
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
      },
      fontSize: {
        'f28': '28px',
      },
      
  
  plugins: [],
}
}
}
