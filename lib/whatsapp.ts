import { site } from "./content";

// Link do WhatsApp com a mensagem já preenchida na conversa.
export function linkWhatsapp(mensagem: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
