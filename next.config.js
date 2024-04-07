/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
  const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');
  setupDevPlatform();
}

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
};
