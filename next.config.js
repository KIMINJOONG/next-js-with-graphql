/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GQL_DOMAIN: process.env.GQL_DOMAIN
  },
}

module.exports = nextConfig
