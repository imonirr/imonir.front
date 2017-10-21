const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { commonConfig } = require('./webpack.common');

const config = merge([
  parts.setDevServer({
    host: 'localhost', // process.env.HOST,
    port: 8888, // process.env.PORT,
  }),
]);


exports.developmentConfig = merge(commonConfig, config);
