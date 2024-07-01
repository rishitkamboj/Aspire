import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, colors:{
        gray:{
          200:"#fffefe",
          100:"#b0acac"
        },
        blue:{
          700:"#1997ef"
        },
        black:{
          100:"#424040"
        }
      }
    },
  },
  plugins: [],
};
export default config;
