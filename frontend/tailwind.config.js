/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          josefin: ["'Josefin Sans'", "sans-serif"],
      },
    },  
    },
    plugins: [require("daisyui")], // 👈 Add this line if missing
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#6E3497", // Main color
            "secondary": "#370095", // Secondary color
            "accent": "#9D6CC0", // A lighter variation of primary
            "neutral": "#1E1E1E", 
            "base-100": "#ffffff", 
            "info": "#9D6CC0",
            "success": "#6E3497",
            "warning": "#370095",
            "error": "#9D6CC0",
          },
        },
      ],
    },
  };