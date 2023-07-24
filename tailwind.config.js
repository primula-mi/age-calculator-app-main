/** @type {import("tailwindcss").Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./**/*.html"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primaryPurple: "hsl(259, 100%, 65%)",
        primaryLighrRed: "hsl(0, 100%, 67%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGray: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        "sans": ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        outputMobile: '3.5rem',
        outputDesktop: '6.5rem',
      },
      borderRadius: {
        "br-5xl": "5rem",
      },
    },
  },
  plugins: [],
}

