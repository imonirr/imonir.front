const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./constants');


const commonConfig = merge([
  parts.setEntries,
  parts.setOutput,
  parts.resolveProjectDependencies,
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.copyExternalLibs(),
  parts.generateDevHTML,
  parts.loadFonts({
    include: PATHS.sauce,
    exclude: PATHS.node,
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.loadImages({ include: PATHS.sauce, exclude: PATHS.node }),
  parts.loadJavaScript({ include: PATHS.sauce, exclude: [/node_modules/, /libs/]}),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
]);


exports.commonConfig = commonConfig;
