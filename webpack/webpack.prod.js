const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      minRatio: 0.8,
      threshold: 10240,
      test: /\.js$|\.css$|\.html$/,
    }),
  ],
});
