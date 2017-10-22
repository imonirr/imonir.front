const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');
const { PATHS } = require('./constants');

exports.setFreeVariables = variables => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': variables,
    }),
  ],
});

exports.setEntries = {
  entry: {
    app: `${PATHS.sauce}/index.js`,
  },
};


exports.setOutput = {
  output: {
    path: PATHS.build,
    filename: '[name]-[hash].js',
    publicPath: '/',
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
      PATHS.app,
      PATHS.node,
    ],
    alias: {
      Assets: PATHS.Assets,
      Styles: PATHS.Styles,
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
};

exports.copyExternalLibs = () => ({
  plugins: [
    new CopyWebpackPlugin([
      { from: PATHS.Libs , to: PATHS.build + '/libs/' },
    ]),
  ],
});

// exports.setExtraLibs = {
//   plugins: [

//     new AddAssetHtmlPlugin([
//       { filepath: PATHS.Libs + '/jquery-2.1.1.min.js' , type: 'js'},
//     ]),
//   ],
//   // resolve:
//   // {
//   //   alias: {
//   //     jQuery: PATHS.Libs + '/jquery-2.1.1.min.js',
//   //   },
//   //   extensions: ['.js'],
//   // },
//   // externals: {
//   //   jQuery: 'jQuery',
//   // },
//   // plugins: [
//   //   new webpack.ProvidePlugin({
//   //     jQuery: 'jQuery',
//   //   }),
//   // ],
// };

exports.generateDevHTML = {
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.sauce}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      // Capture eot, ttf, woff, and woff2
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      include,
      exclude,

      use: {
        loader: 'file-loader',
        options,
      },
    }],
  },
});
exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(png|jpg|svg)$/,
      include,
      exclude,

      use: {
        loader: 'url-loader',
        options,
      },
    }],
  },
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,
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
    }],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use: [
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
        loader: 'style-loader!css-loader',
        // include,
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(bundle =>
    new webpack.optimize.CommonsChunkPlugin(bundle),
  ),
});


/* ***************************
 * DEVELOPMENT PARTS
 * **************************/

exports.hmrPlugins = {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
exports.dashBoardPlugin = {
  plugins: [
    new DashboardPlugin(),
  ],
};

exports.setDevServer = ({ host, port } = {}) =>
  ({
    devServer: {
      // contentBase: PATHS.build,
      hot: true,
      // quiet: true,
      stats: {
        colors: true,
      },
      historyApiFallback: true,
      host,
      port,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  });


/* ***************************
 * PRODUCTION PARTS
 * **************************/

exports.clean = path =>
  ({
    plugins: [
      new CleanWebpackPlugin([path],
        {
          verbose: true,
          allowExternal: true,
        }),
    ],
  });

exports.minifyJavaScript = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      parallel: true,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
  ],
};

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});

exports.extractCSS = ({ include, exclude }) => {
  // Output extracted CSS to a file
  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
  });

  return {
    module: {
      rules: [{
        test: /\.scss$/,
        include,
        exclude,
        use: extractSass.extract({
          // use: [
          //   'style-loader',
          //   'css-loader',
          //   // 'postcss-loader'
          //   {
          //     loader: 'sass-loader',
          //   },
          // ],
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
        // include,
        // use: ['style-loader', 'css-loader'],
      },
      ],
    },
    plugins: [extractSass],
  };

  // return {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         include,
  //         exclude,

  //         use: plugin.extract({
  //           use,
  //           fallback: 'style-loader',
  //         }),
  //       },
  //     ],
  //   },
  //   plugins: [plugin],
  // };
};

// exports.autoprefix = () => ({
//   loader: 'postcss-loader',
//   options: {
//     plugins: () => ([
//       require('autoprefixer')(),
//     ]),
//   },
// });
