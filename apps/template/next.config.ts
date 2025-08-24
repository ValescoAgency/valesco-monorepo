import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@valesco/ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
