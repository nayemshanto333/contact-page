import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0D17",
        foreground: "#FFFFFF",
        primary: "#A604F2",
        secondary: "#763AF5",
      },
    },
  },
  plugins: [],
} satisfies Config;
