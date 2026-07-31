import type { Config } from "tailwindcss";

// Paleta pensada para o consultório da Caroline:
// verde-mata (crescimento/segurança), vinho (coragem/força feminina — sem cair
// no terracota genérico), papel amanteigado e ocre como toque quente pontual.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E2A22",
        paper: "#EFEDE1",
        card: "#FBFAF6",
        brand: {
          DEFAULT: "#3C5647",
          light: "#5A7A67",
          dark: "#243529"
        },
        wine: {
          DEFAULT: "#8B3448",
          light: "#A84F63",
          dark: "#652435"
        },
        ochre: "#C79A56"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"]
      },
      maxWidth: {
        content: "1180px"
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px"
      }
    }
  },
  plugins: []
};

export default config;
