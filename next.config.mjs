/ ** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true
  },
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString()
  }
};

export default nextConfig;