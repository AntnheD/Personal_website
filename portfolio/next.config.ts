import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'example.com', // Replace with your actual domain or CDN if needed
      port: '',
      pathname: '/**',
      },
    ],
      domains: ['cdn.jsdelivr.net'],
  },
};

export default nextConfig;
