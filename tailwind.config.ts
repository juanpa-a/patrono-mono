import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#F2F0EE',
        'grain': '#E7E4D8',
      },
    },
  },
  plugins: [],
} satisfies Config;
