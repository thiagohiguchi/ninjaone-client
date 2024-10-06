/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '20px',
      },  
      lineHeight:{
        sm: '16px',
        md: '16px',
        lg: '24px',
      },  
      colors: {
        brand: '#002A42',
        primary: '#337AB7',
      },
      width: {
        '9/10': '90%',
      },
      maxWidth: {
        internal: '1232px',
        '9/10': '90%',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#337AB7",
          "secondary": "#f6d860",
          "accent": "#337AB7",
          "neutral": "#3d4451",
          "error": "#D53948",
          "base-100": "#ffffff",

          "--rounded-box": "4px",
          "--rounded-btn": "4px",
          "--tab-btn": "4px",
          "--border-btn": "1px", // border width of buttons

          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  }
  
};
