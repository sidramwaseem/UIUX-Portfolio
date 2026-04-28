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
        bg: "#F5F4F0",
        accent: {
          DEFAULT: "#2D5BE3",
          hover: "#1E46C7",
          muted: "#EEF2FD",
        },
        card: {
          bg: "#1C1B1A",
          border: "#2E2D2B",
          "border-hover": "#2D5BE3",
          text: "#F0EDE8",
          secondary: "#8A877F",
          dim: "#4A4845",
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
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
