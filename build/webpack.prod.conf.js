const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const base = require('./webpack.base.conf');
const { production } = require('./config');

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': production.env,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        );
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: production.sw.cacheId,
      filename: 'service-worker.js',
      staticFileGlobs: ['public/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'public/',
    }),
  ],
});
