const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin, optimize } = require('webpack');
const autoprefixer = require('autoprefixer');
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

const plugins = [];

plugins.push(new HtmlWebpackPlugin({
  template: 'src/index.html',
  inject: 'body',
  filename: 'index.html',
}));

if (NODE_ENV === 'production') {
  plugins.push(new optimize.DedupePlugin());
  plugins.push(new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  }));
  plugins.push(new optimize.UglifyJsPlugin({
    compress: {
      warnings: true,
    },
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'scrummy.js',
  },
  module: {
    loaders: [
      {
        test: /\.yaml$/,
        loaders: ['json', 'yaml'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.png|.svg|.jpg|.gif$/,
        loaders: ['file'],
      },
    ],
  },
  postcss: () => [autoprefixer],
  plugins,
};

