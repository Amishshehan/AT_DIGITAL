/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['18px'],
      xl: ['21px'],
      '2xl': ['27px'],
      '3xl': ['36px'],
      '4xl': ['48px'],
      '8xl': ['96px']
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('\assets\hero.png')",
      },
      colors: {
        'primary': "#6B3CC9",
        "secondary": "#F28D35",
        "icebaby ": "#6D6D6D",
        "richblue": "#F5F6FF",
        "electicindigo": "#52378C",
        "interstellarblue": "#78BF91",
        "tricornblack": "#2F2F2F",
        "textLight": "#545A75",
        "textSubtle": "#9C9991",
        "wizardwhite": "#E2F2FE",
        "cuddylyarn": "#FFF8E0",
        "error": "#FF0335",
        "success": "#5EB30B"

      },
      screens: {
        "wide": {'max': '2500px'},
        "normal": {'max': '1200px'},
        "tablet": {'max': '768px'},
        "mobile": {'max': '375px'},
        
      }
      
    },
  },
  plugins: [],
}