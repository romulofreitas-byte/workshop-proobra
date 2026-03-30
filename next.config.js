/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
    unoptimized: false,
  },
  async headers() {
    const securityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
    ]
    return [
      // Não aplicar em /_next/* (chunks JS/CSS) nem /api/* — evita efeitos colaterais em assets.
      { source: '/', headers: securityHeaders },
      { source: '/:path((?!_next/|api/).+)', headers: securityHeaders },
    ]
  },
  // Garantir que arquivos estáticos sejam servidos corretamente
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
