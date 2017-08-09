require('dotenv').load();

const path = require('path');

const production = {
  env: require('./production'),
  assetsRoot: path.resolve(__dirname, '../../public'),
  assetsPublicPath: '/2017/',
  sw: {
    cacheId: 'pyconhk-2017',
  },
};

const development = {
  env: require('./development'),
  port: process.env.PORT || 8080,
  assetsPublicPath: '/2017/',
};

module.exports = {
  production,
  development,
};
