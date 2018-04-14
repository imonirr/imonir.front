const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const dev = process.env.NODE_ENV !== 'production';

const configName = dev ? 'development' : 'production';

const nextConfig = merge([
  parts.resolveProjectDependencies,
  parts.setGlobalVariables(configName),
]);

exports.nextConfig = nextConfig;
