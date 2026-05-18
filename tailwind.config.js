/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4A017",
          light: "#E8C547",
          dark: "#A07810",
        },
        red: {
          brand: "#E02020",
          dark: "#B01818",
        },
        warm: {
          DEFAULT: "#FAFAF8",
          2: "#F2EFE8",
          3: "#E8E0D0",
        },
        ink: "#1A1A1A",
        muted: "#6B6560",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        gold: "0 8px 32px rgba(212,160,23,0.25)",
        "gold-lg": "0 16px 48px rgba(212,160,23,0.35)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 48px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
