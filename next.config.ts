import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 This disables ESLint errors during `next build`.
    // Use only as a temporary measure — fix the underlying issues later.
    ignoreDuringBuilds: true,
  },
  /* you can keep other config options here */
};

export default nextConfig;
