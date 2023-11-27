/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1363df",
        
"secondary": "#082a5e",
        
"accent": "#ffffff",
        
"neutral": "#ffffff",
        
"base-100": "#ffffff",
        
"info": "#ffffff",
        
"success": "#00ffff",
        
"warning": "#ffffff",
        
"error": "#ffffff",
        },
      },
    ],
  }
}