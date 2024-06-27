import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "trxqblue-500": "#069CFD",
      },
      spacing:{
        "1%": "1%",
        "10%": "10%",
        "70%": "70%",
      },
    },
  },
  plugins: [],
};
export default config;
