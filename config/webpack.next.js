const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const configName = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const nextConfig = merge([
  parts.resolveProjectDependencies,
  parts.setGlobalVariables(configName),
]);

exports.nextConfig = nextConfig;
