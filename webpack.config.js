const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  sauce: path.join(__dirname, 'sauce'),
  build: path.join(__dirname, 'build'),
  node: path.join(__dirname, 'node_modules'),
};

const commonConfig = merge([
  {
    resolve: {
      modules: [
        `${PATHS.sauce}/app`,
        PATHS.node,
      ],
      extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    entry: {
      app: `${PATHS.sauce}/index.js`,
    },
    output: {
      path: PATHS.build,
      filename: '[name]-[hash].bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.sauce}/index.html`,
        filename: 'index.html',
        inject: 'body',
      }),
    ],
  },
  parts.loadJavaScript({ include: PATHS.sauce }),
]);

const productionConfig = merge([
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};


// module.exports = {
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
//     ],
//   },
// };
