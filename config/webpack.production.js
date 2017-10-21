const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { commonConfig } = require('./webpack.common');

const { PATHS } = require('./paths');

const config = merge([
  parts.clean(PATHS.build),
]);


exports.developmentConfig = merge(commonConfig, config);
