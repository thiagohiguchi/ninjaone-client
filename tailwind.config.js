/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#002A42',
        primary: '#337AB7',
      },
      maxWidth: {
        default: '1232px',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
        {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: '#337AB7',
        },
      }
    ]
  },
};
