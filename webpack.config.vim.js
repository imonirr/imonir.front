// NOTE:
// This is for vim syntastic to find module resolves
//
const path = require('path');

const PATHS = {
  root: path.join(__dirname),
  sauce: path.join(__dirname, 'sauce'),
  app: path.join(__dirname, 'sauce/app'),
  build: path.join(__dirname, 'build'),
  node: path.join(__dirname, 'node_modules'),

  Libs: path.join(__dirname, 'sauce/libs'),
  Assets: path.join(__dirname, 'sauce/assets'),
  Styles: path.join(__dirname, 'sauce/styles'),

};

const API_URL = {
  development: 'http://back.imonir.com/',
  production: 'http://back.imonir.com/',
};


const HOST = '0.0.0.0';
const PORT = 80;

module.exports = {
  entry: {
    app: `${PATHS.sauce}/index.js`,
  },
  output: {
    publicPath: '/',
    path: PATHS.build,
    filename: '[name]-[hash].js',
  },
  module: {
    // configuration regarding modules
    rules: [{
      // Capture eot, ttf, woff, and woff2
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,

      use: {
        loader: 'file-loader',
      },
    },
    {
      test: /\.(png|jpg|svg)$/,

      use: {
        loader: 'url-loader',
        options: {
          // fallback: 'file-loader',
          limit: 81,
          name: 'assets/images/[name]-[hash].[ext]',
        },
      },
    },
    {
      test: /\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,

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
    {
        test: /\.scss$/,
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
      }
    ],

  },
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

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react", /^@angular\//],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    // ...
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}
