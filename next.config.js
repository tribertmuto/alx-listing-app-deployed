/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Environment variables can be accessed via process.env.*
  },
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll be using
  },
};

module.exports = nextConfig;
