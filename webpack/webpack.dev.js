const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});
