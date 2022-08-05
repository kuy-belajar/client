/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  env: {
    CLIENT_MEMBER_URL: process.env.CLIENT_MEMBER_URL,
    API_GATEWAY_URL: process.env.API_GATEWAY_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
