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
        content: "#1a1a1e"
      },
      fontFamily: {
        title: ['Nunito', 'sans-serif'], // Changed from Poppins to Nunito
      },
      maxWidth: {
        'max': '1300px',
      },
    },
  }
};

export default config;
