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
        accent: "#fcabab"
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'], 
      },
      maxWidth: {
        'max': '1300px',
      },
    },
  }
};

export default config;
