/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true
  },
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date(
      Date.now() + 9 * 60 * 60 * 1000
    ).toISOString().replace('T', ' ').replace(/\.\d+Z$/, '')
  }
};

export default nextConfig;