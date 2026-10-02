import type { Config } from "tailwindcss";
import { cores } from "./lib/cores";

// As cores vivem em lib/cores.ts (fonte única). Para um novo tom, adicione-o
// lá com um nome semântico.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: cores,
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
