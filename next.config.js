/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // next export 사용 (정적 배포)
  // 커스텀 도메인(minseobae.dev)에서 루트로 서빙되므로 basePath/assetPrefix 불필요
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig