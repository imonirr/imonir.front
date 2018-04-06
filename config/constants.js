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

const API_URL = {
  development: 'http://back.imonir.com/',
  production: 'http://back.imonir.com/',
};

const API_URL_BACK = {
  development: 'http://backend:8000/',
  production: 'http://backend:8000/',
};


exports.HOST = '0.0.0.0';
exports.PORT = 80;
exports.PATHS = PATHS;
exports.API_URL = API_URL;
exports.API_URL_BACK = API_URL_BACK;
