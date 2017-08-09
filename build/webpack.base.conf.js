const config = require('./config');

module.exports = {
  entry: {
    app: './assets/js/app',
    timetable: './assets/js/timetable',
    venue: './assets/js/venue',
    staff: './assets/js/pages/staff',
  },
  devtool: 'source-map',
  output: {
    path: config.production.assetsRoot,
    publicPath: '/2017/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
