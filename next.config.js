const merge = require('webpack-merge');
const { nextConfig } = require('./config/webpack.next');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: 'build',
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
  webpack: (config) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // return config
    return merge(nextConfig, config);
  },
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config

  //   // Important: return the modified config
  //   return config
  // },
});
