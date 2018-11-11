const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
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
        loaders: ['url-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src')
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../static'), to: '../' }])
  ]
};
