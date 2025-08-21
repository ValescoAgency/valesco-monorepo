/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@valesco/ui', '@valesco/config', '@valesco/types', '@valesco/utils'],
}

module.exports = nextConfig
