import { ImageResponse } from "next/og";
import { cores } from "@/lib/cores";
import { site } from "@/lib/content";

// Favicon gerado pelo Next: monograma com as iniciais sobre o tom da marca.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
// Edge: o runtime Node do @vercel/og quebra no Windows (Next 14).
export const runtime = "edge";

export default function Icon() {
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
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: -1
        }}
      >
        {iniciais}
      </div>
    ),
    size
  );
}
