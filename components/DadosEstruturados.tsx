import { hero, redesSociais, seo, site } from "@/lib/content";

/**
 * Dados estruturados (JSON-LD, schema.org) para o Google entender quem é a
 * profissional e qual serviço o site oferece. Sem preço (Código de Ética).
 */
export default function DadosEstruturados() {
  const pessoaId = `${site.url}/#caroline`;

  const dados = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": pessoaId,
        name: site.nome,
        jobTitle: site.titulo,
        url: site.url,
        image: `${site.url}${hero.midia.poster}`,
        email: site.email,
        telephone: site.telefone,
        knowsAbout: seo.temas,
        sameAs: redesSociais.links
          .filter((r) => r.url.startsWith("https://www.instagram.com"))
          .map((r) => r.url),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Registro profissional",
          name: site.crp,
          recognizedBy: { "@type": "Organization", name: site.conselho }
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#atendimento`,
        name: `${site.nome} — ${site.titulo}`,
        description: seo.descricao,
        url: site.url,
        image: `${site.url}${hero.midia.poster}`,
        email: site.email,
        telephone: site.telefone,
        founder: { "@id": pessoaId },
        areaServed: { "@type": "Country", name: "Brasil" },
        availableLanguage: "pt-BR",
        serviceType: seo.servicos
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.nome,
        inLanguage: "pt-BR"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      // JSON gerado só a partir de lib/content.ts; "<" escapado por segurança.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
