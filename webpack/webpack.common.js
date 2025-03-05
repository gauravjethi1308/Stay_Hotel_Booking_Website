const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            context: 'public/assets',
            name: '[name].[ext]',
          },
        },
      },

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: true,
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/assets',
          to: 'assets',
        },
      ],
    }),

    // new FaviconsWebpackPlugin({
    //   logo: path.resolve(__dirname, '..', './public/assets/svg.svg'),
    //   mode: 'webapp',
    //   favicons: {
    //     icons: {
    //       android: false,
    //       appleIcon: false,
    //       appleStartup: false,
    //       coast: false,
    //       favicons: true,
    //       firefox: false,
    //       windows: false,
    //       yandex: false,
    //     },
    //   },
    // }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
