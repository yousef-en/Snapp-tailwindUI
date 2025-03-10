/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode:'class',
  content: ["./src/*.html"],
    theme: {
    
      fontFamily: {
        'iran_Bold': 'iran_Bold',
        'iran_Light': 'iran_Light',
      },
      screens: {
        'sm': '650px',
        'md': '860px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    extend: {
       fontSize: {
        clamp: "clamp(0.7rem, 1vw, 1rem)",
        clamp_intro: "clamp(1.5rem, 2vw, 2rem)",
        clamp_des: "clamp(1rem, 1.2vw, 2rem)",
        clamp_super_des: "clamp(0.9rem, 1vw, 2rem)",
      },
      
      colors: {
        green_item: 'rgb(0, 219, 117)',
        green_snapp: '#21aa58',
        text_nav: '#414141',
        text_bg: '#404040',
        bg_gray: '#f2f5f8',
        bg_nav_res: 'rgba(0,0,0,0.5)',
        bg_dark: '#242424',
        bg_dark2: '#000',
      },
    },
  },

  plugins: [],
}

