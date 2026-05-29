import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/one-o-eight-cafe",
  assetPrefix: "/one-o-eight-cafe",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
