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
      },
      colors: {
        'midnight': {
        '50': '#eef9ff',
        '100': '#d9f1ff',
        '200': '#bbe7ff',
        '300': '#8cd9ff',
        '400': '#55c2ff',
        '500': '#2ea4ff',
        '600': '#1786f9',
        '700': '#106de5',
        '800': '#1458b9',
        '900': '#174b91',
        '950': '#0a192f',
        },
        'aquamarine': {
        '50': '#eefffb',
        '100': '#c5fff5',
        '200': '#8bffed',
        '300': '#4affe3',
        '400': '#14edd3',
        '500': '#00d1ba',
        '600': '#00a899',
        '700': '#00857b',
        '800': '#056a63',
        '900': '#0a5752',
        '950': '#003534',
        },
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
  darkMode: 'class',
};
export default config;
