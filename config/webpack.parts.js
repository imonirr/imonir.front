const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');
const { PATHS } = require('./paths');


exports.setEntries = {
  entry: {
    app: `${PATHS.sauce}/index.js`,
  },
};


exports.setOutput = {
  output: {
    path: PATHS.build,
    filename: '[name]-[hash].bundle.js',
  },
};
//   remove [chunkhash] with webpack-dev-server - https://github.com/webpack/webpack/issues/2393
//   const filename = isProduction ? '[name].[chunkhash].bundle.js' : '[name].bundle.js';
//   return {
//     output: {
//       filename,
//       path: pathToDirectory,
//       chunkFilename: '[name].bundle.js',
//       publicPath: '/',
//     },
//   };
// };

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.resolveProjectDependencies = {
  resolve: {
    modules: [
      `${PATHS.sauce}/app`,
      PATHS.node,
    ],
    // alias: {
    //   asset: PATHS.asset,
    // },
    extensions: ['.js', '.jsx', '.scss'],
  },
};

exports.generateDevHTML = {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${PATHS.sauce}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

exports.setDevServer = ({ host, port } = {}) =>
  ({
    devServer: {
      hot: true,
      quiet: true,
      stats: {
        colors: true,
      },
      historyApiFallback: true,
      host,
      port,
      // overlay: {
      //   warnings: true,
      //   errors: true,
      // },
    },
  });


exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,

        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
});
exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        include,
        exclude,

        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include,
        exclude,

        loader: 'babel-loader',
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }
          cacheDirectory: true,
        },
      },
    ],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        user: [
          'style-loader',
          'css-loader',
          // 'postcss-loader'
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});


exports.dashBoardPlugin = {
  plugins: [
    new DashboardPlugin(),
  ],
};

exports.clean = path => ({
  plugins: [
    new CleanWebpackPlugin([path]),
  ],
});
