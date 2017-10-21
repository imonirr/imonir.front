const path = require('path');

const PATHS = {
  root: path.join(__dirname),
  sauce: path.join(__dirname, '../sauce'),
  asset: path.join(__dirname, '../sauce/asset'),
  build: path.join(__dirname, '../build'),
  node: path.join(__dirname, '../node_modules'),
};

exports.PATHS = PATHS;
