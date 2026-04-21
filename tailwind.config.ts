import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C",
          80: "#1E1E20",
          60: "#4A4A4F",
        },
        stone: {
          5: "#FAFAF7",
          10: "#F3F2ED",
          20: "#E5E3DB",
          40: "#B8B5A9",
        },
        // Primary brand: LocalDoor purple, pulled from the logo gradient
        plum: {
          DEFAULT: "#9333EA", // primary purple — CTAs, focus, accents
          dark: "#581C87", // hover/active states, H1 emphasis
          deep: "#3B0F66", // dark-mode surface / deepest brand tone
          tint: "#F3EBFB", // soft background for chips, hover states
          mid: "#7C3AED", // mid-weight for secondary accents
        },
        // Secondary accent from the logo's mint inner stroke
        // Used for Client-Work labels + success states only (not decorative)
        mint: {
          DEFAULT: "#34D399",
          light: "#6EE7B7",
          dark: "#0E8A5F",
        },
        // Kept for any red-tinged signal states we add later; not decorative
        signal: {
          green: "#0E8A5F",
          red: "#B33915",
        },
        // Backwards-compat alias so any residual `ember-*` classes keep rendering in purple
        ember: {
          DEFAULT: "#9333EA",
          dark: "#581C87",
          tint: "#F3EBFB",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        title: ["1.375rem", { lineHeight: "1.35" }],
        "display-sm": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        editorial:
          "0 1px 0 rgba(11,11,12,0.04), 0 24px 48px -24px rgba(11,11,12,0.12)",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        "2xl": "20px",
      },
      maxWidth: {
        prose: "65ch",
      },
      transitionTimingFunction: {
        "out-emphasized": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
