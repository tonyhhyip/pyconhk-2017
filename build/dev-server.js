const express = require('express');
const serveStatic = require('serve-static');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { development } = require('./config');
const devConfig = require('./webpack.dev.conf');

const app = express();

const compiler = webpack(devConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  quiet: true,
  publicPath: development.assetsPublicPath,
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {},
});

app.use(morgan('dev'));
app.use('/2017/data', serveStatic('assets/data'));
app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(development.port, () => {
  console.log('Ready to start server');
});

devMiddleware.waitUntilValid(() => {
  console.log('Start to listen');
});
