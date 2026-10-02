// Paleta do consultório da Caroline, tirada dos tons do topo do site:
// papel amanteigado (fundo), vinho (botão principal), nude/cacau (o tom do
// blazer e da pele nas fotos) e ocre como toque quente pontual.
//
// Fonte única das cores: usada pelo tailwind.config.ts (classes `bg-brand`,
// `text-wine`...) e por arquivos que não passam pelo Tailwind, como o ícone.
//
// Contraste (WCAG) conferido para texto: `card` sobre `brand` 6,2:1;
// `paper` sobre `brand-dark` 11,8:1; `ochre` sobre `brand-dark` 5,4:1;
// `brand` sobre `paper` 5,5:1. Ao trocar um tom, refaça essa conta.
export const cores = {
  // Texto principal: quase-preto quente (antes era esverdeado).
  ink: "#2B2124",
  paper: "#EFEDE1",
  card: "#FBFAF6",
  // Cor de apoio da marca: cacau/nude (antes era verde-mata).
  brand: {
    DEFAULT: "#7D5546",
    light: "#B98A78",
    dark: "#3A2826"
  },
  wine: {
    DEFAULT: "#8B3448",
    light: "#A84F63",
    dark: "#652435"
  },
  ochre: "#C79A56"
};
