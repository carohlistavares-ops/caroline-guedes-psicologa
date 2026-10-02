// Todo o texto do site fica centralizado aqui.
// Para editar qualquer parágrafo do site, basta mexer neste arquivo —
// não é necessário tocar nos componentes.
//
// Atenção (Código de Ética do Psicólogo, art. 20): não usar o preço como
// propaganda. Nada de valores em reais, "barato", "promoção" ou descontos.
// "Valor social" é tratado como disponibilidade de vagas, sem números.

export const site = {
  nome: "Caroline Guedes",
  titulo: "Psicóloga Clínica",
  crp: "CRP 13/12977",
  conselho: "Conselho Regional de Psicologia da 13ª Região",
  // Domínio oficial: usado no canonical, sitemap, robots e dados estruturados.
  url: "https://www.psicarolineguedes.com.br",
  whatsapp: "https://wa.me/5583991421977",
  telefone: "+55 83 99142-1977",
  email: "psicarolguedes@gmail.com",
  cidade: "Atendimento on-line para todo o Brasil",
  // Foto profissional: usada nos dados estruturados (Google).
  foto: "/midias/hero/photo_2026-07-30_21-51-12.jpg",
  // Data de publicação dos vídeos (dados estruturados VideoObject).
  videosPublicadosEm: "2026-10-02",
  desenvolvidoPor: {
    texto: "Desenvolvido por",
    autor: "Felluz",
    url: "https://felluzstudio.com.br/"
  }
};

// Textos para buscadores e compartilhamento (WhatsApp, Instagram etc.).
// Termo principal: "psicóloga on-line com valor social" + TCC.
export const seo = {
  titulo: "Psicóloga Online com Valor Social | TCC | Caroline Guedes",
  descricao:
    "Atendimento psicológico on-line para todo o Brasil, com vagas de valor social. Terapia Cognitivo-Comportamental com Caroline Guedes, CRP 13/12977.",
  // Imagem de compartilhamento (WhatsApp, Instagram etc.), 1200x630 e leve
  // (< 300 KB, senão o WhatsApp pode não exibir a prévia). Se mudar o título
  // ou a foto do hero, refaça esta arte também.
  imagem: "/midias/compartilhamento/caroline-guedes-psicologa.jpg",
  imagemAlt: "Caroline Guedes, psicóloga clínica com atendimento on-line",
  servicos: [
    "Psicoterapia on-line",
    "Atendimento psicológico com valor social",
    "Terapia Cognitivo-Comportamental (TCC)",
    "Terapia para dependência emocional"
  ],
  temas: [
    "Terapia Cognitivo-Comportamental",
    "Neuropsicologia",
    "Psicologia em Saúde",
    "Dependência emocional",
    "Saúde emocional da mulher"
  ]
};

export const navegacao = {
  links: [
    { href: "#sobre", label: "Sobre mim" },
    { href: "#trajetoria", label: "Trajetória" },
    { href: "#curso", label: "Curso" },
    { href: "#redes", label: "Redes sociais" }
  ],
  cta: "Agende sua consulta",
  ctaCurto: "Agendar",
  abrirMenu: "Abrir menu"
};

export const redesSociais = {
  rotulo: "Vamos continuar em contato",
  titulo: "Redes sociais",
  links: [
    // O WhatsApp não entra aqui: ele já está nos botões do agendamento.
    {
      nome: "Instagram",
      icone: "instagram",
      url: "https://www.instagram.com/psi.carolguedes/",
      usuario: "@psi.carolguedes"
    },
    {
      nome: "E-mail",
      icone: "email",
      url: `mailto:${site.email}`,
      usuario: site.email
    }
  ] as const
};

export const hero = {
  titulo: "Um espaço ético e acolhedor para reconstruir a sua história",
  subtitulo:
    "Atendimento clínico on-line para todo o Brasil, fundamentado em evidências científicas, para cuidar da sua saúde mental com respeito ao seu tempo.",
  cta: "Agendar consulta",
  // Vídeo de apresentação (vertical 9:16, com fala). Toca sem som em loop
  // como prévia; o botão "ouvir" recomeça do início com som.
  video: {
    src: "/midias/hero/apresentacao.mp4",
    capa: "/midias/hero/apresentacao-capa.jpg",
    alt: "Vídeo em que Caroline Guedes, psicóloga clínica, se apresenta",
    ouvir: "Ouvir apresentação",
    titulo: "Apresentação de Caroline Guedes, psicóloga clínica",
    descricao: "Vídeo de apresentação de Caroline Guedes, psicóloga clínica (CRP 13/12977).",
    duracao: "PT59S"
  }
};

export const sobreMim = {
  titulo: "Sobre mim",
  paragrafos: [
    "Sou psicóloga clínica, registrada no Conselho Regional de Psicologia da 13ª Região (CRP 13/12977), e atuo oferecendo um atendimento ético, acolhedor e fundamentado em evidências científicas, com foco na promoção da saúde mental e do bem-estar.",
    "Atuo com base na Terapia Cognitivo-Comportamental (TCC), uma abordagem científica que compreende a relação entre pensamentos, emoções e comportamentos. Por meio dessa abordagem, auxilio na identificação e modificação de padrões que geram sofrimento, promovendo o desenvolvimento de estratégias práticas, o fortalecimento da autonomia e mudanças consistentes para uma vida mais saudável.",
    "Minhas especializações em Neuropsicologia e Psicologia em Saúde ampliam minha compreensão do funcionamento cognitivo, emocional e comportamental, permitindo uma avaliação integral de cada pessoa. Essas especializações me proporcionaram habilidades para identificar fatores que influenciam a saúde mental, compreender diferentes transtornos psicológicos, realizar avaliações com embasamento científico e planejar intervenções individualizadas, sempre considerando a história, o contexto e as necessidades de cada paciente.",
    "Acredito que o cuidado com a saúde mental precisa ser acessível. Por isso, reservo vagas de atendimento psicológico com valor social para quem não pode arcar com o valor integral da sessão. Também dedico parte importante da minha atuação à saúde emocional da mulher, acompanhando mulheres em situações de dependência emocional."
  ],
  destaques: [
    { rotulo: "Abordagem", valor: "Terapia Cognitivo-Comportamental" },
    { rotulo: "Especializações", valor: "Neuropsicologia · Psicologia em Saúde" },
    { rotulo: "Modalidades", valor: "On-line · todo o Brasil" }
  ]
};

export const trajetoria = {
  titulo: "Trajetória",
  intro:
    "Ao longo da minha trajetória profissional, atuei em diferentes contextos da Psicologia, acompanhando demandas variadas — experiências que ampliaram minha visão sobre o cuidado em saúde mental e fortaleceram minha atuação clínica.",
  linha: [
    {
      titulo: "Atenção básica e saúde mental",
      texto:
        "Atendimentos em Unidades Básicas de Saúde e Centros de Apoio Psicossocial (CAPS), experiência que ampliou minha visão sobre o cuidado em saúde mental."
    },
    {
      titulo: "Educação em saúde",
      texto:
        "Palestras em diversos municípios sobre saúde mental, autoestima, prevenção de doenças e promoção da qualidade de vida."
    },
    {
      titulo: "Saúde emocional da mulher",
      texto:
        "Aprofundamento em situações de violência doméstica e dependência emocional, unindo fundamentação científica à experiência clínica."
    },
    {
      titulo: "Criação do curso Mulher Livre",
      texto:
        "Desenvolvido para auxiliar mulheres, de forma prática, acolhedora e baseada em evidências, a enfrentarem o apego emocional e reconstruírem sua autonomia e identidade."
    }
  ],
  fechamento:
    "Atualmente, atuo com atendimento clínico on-line para todo o Brasil, oferecendo um espaço ético, acolhedor e comprometido com o bem-estar e o desenvolvimento de cada paciente."
};

export const curso = {
  titulo: "Curso Mulher Livre",
  subtitulo: "Do apego emocional à reconstrução da sua autonomia",
  texto:
    "Criado para auxiliar mulheres, de forma prática, acolhedora e baseada em evidências, a enfrentarem o apego emocional e reconstruírem sua autonomia e identidade.",
  linkExterno: "https://mulher-livre.netlify.app/",
  cta: "Conhecer o curso",
  video: {
    src: "/midias/curso/curso-mulher-livre.mp4",
    capa: "/midias/curso/curso-mulher-livre-capa.jpg",
    alt: "Vídeo em que Caroline Guedes apresenta o curso Mulher Livre",
    ouvir: "Ouvir sobre o curso",
    titulo: "Curso Mulher Livre, com Caroline Guedes",
    descricao: "Caroline Guedes fala sobre o curso Mulher Livre.",
    duracao: "PT1M9S"
  }
};

export const agendamento = {
  titulo: "Agende sua consulta",
  subtitulo:
    "Fale diretamente comigo pelo WhatsApp. Há vagas com valor social: escolha a opção abaixo. Retorno em até 1 dia útil.",
  // Botões de WhatsApp com mensagem pronta, para a Caroline saber de cara
  // qual é o interesse. Sem valores em reais (Código de Ética, art. 20).
  whatsapp: {
    valorSocial: {
      label: "Quero uma vaga de valor social",
      mensagem:
        "Olá, Caroline! Vim pelo site e gostaria de saber sobre a disponibilidade de vagas de atendimento com valor social."
    },
    valorIntegral: {
      label: "Agendar com valor integral",
      mensagem: "Olá, Caroline! Vim pelo site e gostaria de agendar uma consulta com valor integral."
    }
  },
  // Banner da seção: imagem horizontal larga (ex: 1536x1024), JPG com até
  // ~400 KB. Ocupa a largura toda da tela, com o cartão de texto por cima,
  // do lado esquerdo. Sem o arquivo, o banner usa o tom brand-dark.
  banner: "/midias/agendamento/banner-agendamento.jpg",
  bannerAlt: "Ambiente acolhedor para atendimento psicológico on-line com Caroline Guedes"
};

// Textos do player de vídeo (hero e curso).
export const videoPlayer = {
  pausar: "Pausar prévia",
  reproduzir: "Retomar prévia"
};

export const rodape = {
  frase: "Atendimento ético, acolhedor e baseado em evidências científicas."
};
