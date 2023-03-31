/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    APIKEY: process.env.OPEN_AI_API_KEY,
  },
  nextConfig,
};
