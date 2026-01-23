import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 청크 로딩 문제 해결을 위한 설정
  trailingSlash: false,
  poweredByHeader: false,

  // 패키지 최적화
  experimental: {
    optimizePackageImports: ['@radix-ui/react-slot', 'clsx', 'tailwind-merge'],
  },

  // 캐시 제어 헤더
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
