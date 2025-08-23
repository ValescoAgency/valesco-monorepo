/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@valesco/ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
