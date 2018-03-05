const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const configName = 'development';

const nextConfig = merge([
  parts.resolveProjectDependencies,
  parts.setGlobalVariables(configName),
]);

exports.nextConfig = nextConfig;
