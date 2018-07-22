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

const PROTOCOL = '//';

const APP_URL = {
  development: `${PROTOCOL}local.www.imonir.com/`,
  production: `${PROTOCOL}www.imonir.com/`,
};

const API_URL = {
  development: `${PROTOCOL}local.api.imonir.com/`,
  production: `${PROTOCOL}api.imonir.com/`,
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
exports.APP_URL = APP_URL;
