const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { development } = require('./config');
const base = require('./webpack.base.conf');

// add hot-reload related code to entry chunks
Object.keys(base.entry).forEach((name) => {
  base.entry[name] = ['./build/dev-client'].concat(base.entry[name]);
});

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': development.env,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
