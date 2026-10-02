// Paleta pensada para o consultório da Caroline:
// verde-mata (crescimento/segurança), vinho (coragem/força feminina — sem cair
// no terracota genérico), papel amanteigado e ocre como toque quente pontual.
//
// Fonte única das cores: usada pelo tailwind.config.ts (classes `bg-brand`,
// `text-wine`...) e por arquivos que não passam pelo Tailwind, como a imagem
// de compartilhamento (opengraph-image) e o ícone.
export const cores = {
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
};
