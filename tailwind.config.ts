import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        dark: "rgb(39 39 42)",
        light: "rgb(250 250 250)",
        bgLight: "#FDFBE5",
        oldaccent: "rgb(30 71 17)",
        accent: "rgb(70 198 74)",
        winered: "#8E2028",
        warning: "#DE0C18",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;