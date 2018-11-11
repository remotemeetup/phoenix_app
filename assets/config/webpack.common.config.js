const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['deps', 'node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules)/,
        use: ['babel-loader', 'ts-loader'],
      },

      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader',
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
