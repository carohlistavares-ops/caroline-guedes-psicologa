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
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-nunito-sans)", "system-ui", "sans-serif"]
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
