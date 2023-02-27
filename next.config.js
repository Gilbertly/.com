/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
};

module.exports = withPlugins([
  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true',
  }],
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV === 'development' || 'dev',
      runtimeCaching,
    },
  }],
], nextConfig);
