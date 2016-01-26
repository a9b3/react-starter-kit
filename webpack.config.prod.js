'use strict';

const path = require('path');
const webpack = require('webpack');

let envConfig;
if (process.env.NODE_ENV === 'production') {
  envConfig = path.join(__dirname, 'config', process.env.NODE_ENV);
} else {
  envConfig = path.join(__dirname, 'config', 'default');
}

module.exports = {

  entry: [
    './src',
  ],

  output: {
    path: path.join(__dirname, 'dist', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    })
  ],

  resolve: {
    alias: {
      config: envConfig,
      root: path.join(__dirname, 'src'),
      styles: path.join(__dirname, 'src', 'styles'),
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
      services: path.join(__dirname, 'src', 'services'),
    },
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss'],
      },
      {
        test: /\.html$/,
        loaders: ['html'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        // inline ULRS for <= 8k images, direct URLs else
        loaders: ['url-loader?limit=8192'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ],
  },

  postcss() {
    return [
      require('postcss-import'),
      require('autoprefixer'),
      require('precss'),
    ];
  },

};
