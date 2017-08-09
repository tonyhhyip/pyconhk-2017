const merge = require('webpack-merge');
const productionEnv = require('./production');

module.exports = merge(productionEnv, {
  NODE_ENV: '"development"',
});
