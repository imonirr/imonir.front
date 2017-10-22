const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { commonConfig } = require('./webpack.common');
const { PATHS } = require('./constants');

const config = merge([
  parts.setFreeVariables({
    NODE_ENV: JSON.stringify('development'),
  }),
  parts.setDevServer({
    host: 'localhost', // process.env.HOST,
    port: 8888, // process.env.PORT,
  }),
  parts.dashBoardPlugin,
  parts.hmrPlugins,

  parts.loadCSS({
    include: PATHS.sauce,
    exclude: PATHS.node,
  }),
]);


exports.developmentConfig = merge(commonConfig, config);
