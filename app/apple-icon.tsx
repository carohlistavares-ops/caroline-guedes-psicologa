import { ImageResponse } from "next/og";
import { cores } from "@/lib/cores";
import { site } from "@/lib/content";

// Ícone usado quando alguém salva o site na tela inicial do iPhone.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
// Edge: o runtime Node do @vercel/og quebra no Windows (Next 14).
export const runtime = "edge";

export default function AppleIcon() {
  const iniciais = site.nome
    .split(" ")
    .map((p) => p[0])
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: cores.brand.DEFAULT,
          color: cores.paper,
          fontSize: 84,
          fontWeight: 600,
          letterSpacing: -3
        }}
      >
        {iniciais}
      </div>
    ),
    size
  );
}
