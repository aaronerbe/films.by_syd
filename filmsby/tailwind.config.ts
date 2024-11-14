import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alt: ['"Montserrat"', 'sans-serif'], 
      },
      colors: {
        //background: "var(--background)",
        //foreground: "var(--foreground)",
        primary: '#1A202C', // Example color for primary color scheme
        secondary: '#2D3748', // Secondary color
        accent: '#F56565', // Accent color
        background: '#EDF2F7', // Background color
        foreground: '#1A202C', // Foreground (text) color
        dark: {
          background: '#1A202C', // Dark mode background
          foreground: '#EDF2F7', // Dark mode foreground
        },
      },
    },
  },
  plugins: [],
};
export default config;



/* 
"Hans Kendrick",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif

*/