// Tailwind theme — elegant premium palette: light beige + gold.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm light backgrounds
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F5EFE6",
          300: "#EDE3D3",
        },
        // Premium gold accents
        gold: {
          100: "#F5EAD3",
          200: "#EAD9B0",
          300: "#DCC08A",
          400: "#C9A86A",
          500: "#B8935A",
          600: "#9C7A45",
        },
        // Elegant dark text
        ink: {
          500: "#6B6257",
          700: "#4A443B",
          900: "#2B2620",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(43, 38, 32, 0.08)",
        card: "0 4px 20px rgba(201, 168, 106, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;

