import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image domains configuration (agar aapko external domains se images serve karni hain)
  images: {
    domains: ['theservicejunction.com', 'xhamster19.com'],
  },

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'theservicejunction.com',
          },
        ],
        destination: 'https://xhamster19.com/:path*',
        permanent: true, // Permanent 301 redirect
      },
    ];
  },

  // Other configuration options can go here
};

export default nextConfig;
