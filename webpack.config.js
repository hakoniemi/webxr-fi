const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/scripts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    static: './src',
  },

  plugins: [new HtmlWebpackPlugin({ hash: true })],
};

module.exports = config;
