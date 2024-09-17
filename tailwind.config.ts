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
        content: "#1a1a1e",
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'], 
      },
      maxWidth: {
        'max': '1300px',
      },
    },
  },
};

export default config;
