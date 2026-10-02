import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// Ao criar novas páginas (ex: /atendimento-social), adicione-as aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
