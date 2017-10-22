const path = require('path');

const PATHS = {
  root: path.join(__dirname),
  sauce: path.join(__dirname, '../sauce'),
  app: path.join(__dirname, '../sauce/app'),
  build: path.join(__dirname, '../build'),
  node: path.join(__dirname, '../node_modules'),

  Libs: path.join(__dirname, '../sauce/libs'),
  Assets: path.join(__dirname, '../sauce/assets'),
  Styles: path.join(__dirname, '../sauce/styles'),

};

exports.PATHS = PATHS;
