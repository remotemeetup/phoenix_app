const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/index.js'),
  
  mode: 'development',
  
  devtool: 'eval',

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js',
    publicPath: 'http://localhost:8080/'
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        },
      },

      {
        test: /\.(css|scss)$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              discardDuplicates: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
