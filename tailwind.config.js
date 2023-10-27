/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/public/**/*.{png,svg}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["10px", "150%"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        primary: "#565656",
        secondary: "#979797",
        tertiary: "#A4A4A4",
        accent: "#007EA6",
      },
      height: {
        navigation: "72px",
      },
      minHeight: {
        page: "calc(100vh - 72px)",
      },
      boxShadow: {
        sidebar: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
        nftCard: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
