// const { devConfig, productionConfig, serverConfig } = require('./webpack.configs');
const { developmentConfig } = require('./webpack.development');

module.exports = (env) => {
  if (env.development) {
    console.log('Using webpack DEVELOPMENT config');
    return developmentConfig;
  }

  // if (env.production) {
  //   console.log('Using webpack PRODUCTION config');
  //   return productionConfig;
  // }

  throw new Error('Unknown env configuration passed');
};
