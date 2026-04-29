import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["'Courier New'", "Menlo", "monospace"],
      },
      colors: {
        bg: "#FFF6EE",
        accent: {
          DEFAULT: "#FF6B6B",
          hover: "#e55a5a",
          muted: "#FFEEEE",
        },
        card: {
          bg: "#1C1B1A",
          text: "#F0EDE8",
          secondary: "#8A877F",
        },
        ink: {
          DEFAULT: "#1A1917",
          secondary: "#6B6860",
          disabled: "#B0ADA8",
        },
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
