const path = require('path');

const PATHS = {
  root: path.join(__dirname),
  sauce: path.join(__dirname, '../sauce'),
  app: path.join(__dirname, '../sauce/app'),
  build: path.join(__dirname, '../build'),
  node: path.join(__dirname, '../node_modules'),

  assets: path.join(__dirname, '../sauce/assets'),
  styles: path.join(__dirname, '../sauce/styles'),
};

exports.PATHS = PATHS;
