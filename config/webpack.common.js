const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./paths');


const commonConfig = merge([
  parts.setEntries,
  parts.setOutput,
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.resolveProjectDependencies,
  parts.generateDevHTML,
  parts.loadFonts({
    include: PATHS.sauce,
    exclude: PATHS.node,
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.loadImages({ include: PATHS.sauce, exclude: PATHS.node }),
  parts.loadJavaScript({ include: PATHS.sauce, exclude: PATHS.node }),
]);


exports.commonConfig = commonConfig;
