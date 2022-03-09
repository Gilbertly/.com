/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");
const withBundleAnalyzer = require('@next/bundle-analyzer');

const stylesPath = path.resolve('./src/styles/index.less');

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
  [withLess, {
    lessLoaderOptions: {
      additionalData: (content) => `${content}\n\n@import '${stylesPath}';`,
      lessOptions: {
        javascriptEnabled: true,
      }
    },
  }]
]);
