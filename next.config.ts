import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Required for container builds (Paketo, Docker)
};

export default nextConfig;
