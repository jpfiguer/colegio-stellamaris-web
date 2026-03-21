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
        primary: {
          DEFAULT: "#0a4da6",
          light: "#2563eb",
          dark: "#062e6f",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#c9a227",
          light: "#e3c255",
          dark: "#9a7b1a",
        },
        dark: "#16162a",
        ink: "#1a1a2e",
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          subtle: "#f1f5f9",
          canvas: "#f4f6fb",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Open Sans", "sans-serif"],
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 48px rgba(10, 77, 166, 0.12)",
        "glow-lg": "0 24px 64px rgba(10, 77, 166, 0.14)",
        soft: "0 1px 2px rgba(22, 28, 45, 0.04), 0 8px 32px rgba(22, 28, 45, 0.06)",
        card: "0 1px 2px rgba(22, 28, 45, 0.05), 0 12px 40px rgba(22, 28, 45, 0.08)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(10, 77, 166, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 77, 166, 0.04) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(10, 77, 166, 0.09), transparent 55%)",
      },
      keyframes: {
        "word-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "word-in": "word-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-glow": "line-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
