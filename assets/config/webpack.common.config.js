const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../static'), to: '../' }])
  ]
};
