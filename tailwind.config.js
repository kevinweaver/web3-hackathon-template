/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gb-blue": "#093e96",
      },
      fontFamily: {
        varela: ['"Varela Round"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
