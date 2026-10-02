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
  imagem: "/midias/compartilhamento/caroline-guedes-psicologa-valor-social.jpg",
  imagemAlt: "Caroline Guedes, psicóloga on-line com vagas de valor social",
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
  eyebrow: "Vamos continuar em contato",
  titulo: "Redes sociais",
  links: [
    {
      nome: "Instagram",
      url: "https://www.instagram.com/carolineg.psi/",
      usuario: "@carolineg.psi"
    },
    {
      nome: "WhatsApp",
      url: site.whatsapp,
      usuario: "Fale diretamente"
    }
  ]
};

export const hero = {
  eyebrow: "Psicologia clínica · TCC · Valor social",
  titulo: "Psicóloga on-line com vagas de valor social",
  subtitulo:
    "Um espaço ético e acolhedor para reconstruir a sua história. Atendimento clínico on-line para todo o Brasil, com Terapia Cognitivo-Comportamental e respeito ao seu tempo.",
  cta: "Agendar consulta",
  midia: {
    // TODO: colocar o vídeo do hero em public/midias/hero/ com estes nomes.
    // Recomendado: 10–20 s em loop, sem áudio, proporção 4:5 (ex: 1080x1350),
    // MP4 H.264 com até ~4 MB (e, opcionalmente, uma versão WebM menor).
    // Enquanto o arquivo não existir, o site mostra a foto abaixo normalmente.
    videoMp4: "/midias/hero/hero.mp4",
    videoWebm: "/midias/hero/hero.webm",
    // Foto exibida enquanto o vídeo carrega, se ele falhar ou se a pessoa
    // preferir menos movimento (configuração de acessibilidade do aparelho).
    poster: "/midias/hero/photo_2026-07-30_21-51-12.jpg",
    alt: "Caroline Guedes, psicóloga clínica",
    pausar: "Pausar vídeo",
    reproduzir: "Reproduzir vídeo"
  }
};

export const sobreMim = {
  eyebrow: "Quem cuida de você",
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
    { rotulo: "Modalidades", valor: "On-line · todo o Brasil" },
    { rotulo: "Valor social", valor: "Vagas disponíveis · consulte" }
  ]
};

export const trajetoria = {
  eyebrow: "O caminho até aqui",
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
    "Atualmente, atuo com atendimento clínico on-line para todo o Brasil, com vagas de valor social, oferecendo um espaço ético, acolhedor e comprometido com o bem-estar e o desenvolvimento de cada paciente."
};

export const curso = {
  eyebrow: "Formação para mulheres",
  titulo: "Curso Mulher Livre",
  subtitulo: "Do apego emocional à reconstrução da sua autonomia",
  texto:
    "Criado para auxiliar mulheres, de forma prática, acolhedora e baseada em evidências, a enfrentarem o apego emocional e reconstruírem sua autonomia e identidade.",
  linkExterno: "https://mulher-livre.netlify.app/",
  cta: "Conhecer o curso",
  imagem: "/midias/curso/photo_2026-07-30_21-51-34.jpg",
  imagemAlt: "Capa do curso Mulher Livre, de Caroline Guedes"
};

export const agendamento = {
  eyebrow: "Dê o primeiro passo",
  titulo: "Agende sua consulta",
  subtitulo:
    "Preencha o formulário ou fale diretamente pelo WhatsApp. Há vagas com valor social: pergunte sobre a disponibilidade. Retorno em até 1 dia útil.",
  whatsappCta: "Falar direto no WhatsApp",
  modalidades: ["On-line"],
  campos: {
    nome: "Nome",
    telefone: "Telefone / WhatsApp",
    email: "E-mail",
    modalidade: "Modalidade",
    valorSocial: "Tenho interesse em uma vaga de valor social",
    mensagem: "Como posso te ajudar?",
    mensagemPlaceholder: "Conte brevemente o que te trouxe até aqui (opcional)."
  },
  enviar: "Enviar pedido de consulta",
  enviando: "Enviando...",
  sucesso: "Recebido! Caroline vai te responder em até 1 dia útil.",
  erroPadrao: "Não foi possível enviar. Tente novamente.",
  privacidade:
    "Seus dados são usados apenas para retornar o seu contato e não são compartilhados com terceiros, conforme a LGPD e o sigilo profissional."
};

export const rodape = {
  frase: "Atendimento ético, acolhedor e baseado em evidências científicas."
};
