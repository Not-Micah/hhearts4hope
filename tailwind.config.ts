import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b80707",
        secondary: "#eb7388",
        accent: "#feeeee",
        crystalrose: "#fdc4c4",
        rubberradish: "#fb9999",
        protonred: "#860505",
        header: "#2C2C2C",
        body: "#4F4F4F",
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'], 
      },
      maxWidth: {
        'max': '1600px',
      },
      spacing: {
        'x': '20px', 
      }
    },
  },
};

export default config;
