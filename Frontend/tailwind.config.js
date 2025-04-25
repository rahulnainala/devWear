module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|card|image|modal|spacer|ripple).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffd700",
        secondary: "#4caf50",
        background: "#141301",
        text: "#ffffff",
        foreground: "#ffffff",
        card: "#1a1800",
        "card-foreground": "#ffffff",
        muted: "#1e1c00",
        "muted-foreground": "rgba(255, 255, 255, 0.6)",
        accent: "#4caf50",
        "accent-foreground": "#ffffff",
        destructive: "#dc2626",
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.1)",
        ring: "rgba(255, 215, 0, 0.5)",
      },
      borderColor: {
        border: "rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [require("@heroui/theme")()],
};
