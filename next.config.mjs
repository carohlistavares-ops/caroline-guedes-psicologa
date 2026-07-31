/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Como as imagens ficam em /public/midias, não precisamos de domínios externos.
    // Se um dia usar imagens de outro domínio (ex: Instagram, CDN), adicione aqui.
    remotePatterns: []
  }
};

export default nextConfig;
