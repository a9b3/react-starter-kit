'use strict';

const path = require('path');
const webpack = require('webpack');
const prodConfig = require('./webpack.config.prod.js');

const BABEL_QUERY = {
  presets: ['react', 'stage-0', "es2015"],
  env: {
    development: {
      plugins: [
        [
          'react-transform',
          {
            transforms: [
              {
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module'],
              },
              {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react'],
              },
            ],
          },
        ],
      ],
    },
  },
  plugins: ['transform-es2015-modules-commonjs']
};

const config = Object.assign({}, prodConfig, {
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src',
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: BABEL_QUERY,
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

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

});

module.exports = config;
