const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/index.js'),
  
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../../priv/static/js'),
    filename: 'app.js',
    publicPath: '/',
  },
  
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),
    new ExtractTextPlugin('../css/app.css'),
  ],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
      },

      {
        test: /\.(ttf|eot)$/,
        loaders: ['file-loader?context=src/&name=../css/[name].[ext]'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src')
      },

      {
        test: /\.(css|scss)$/,
        include: [path.resolve(__dirname, '../src')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                discardDuplicates: true,
                sourceMap: false,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
});
