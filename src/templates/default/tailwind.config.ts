import type { Config } from "tailwindcss";

const config = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "./../../../content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
