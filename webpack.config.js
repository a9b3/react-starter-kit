const path = require('path')
const webpack = require('webpack')
const webpackPlugins = require('webpack-load-plugins')()
const execSync = require('child_process').execSync

const VERSION = execSync('git describe --tag --always').toString().trim()

// TODO: clean this up
// https://webpack.github.io/docs/configuration.html
const bundleNames = {
  js: '[name].bundle.js',
  css: '[name].bundle.css',
}
const prodBundleNames = {
  js: '[name].bundle.[hash:5].js',
  css: '[name].bundle.[hash:5].css',
}

const configs = {}

/*****************************************************************************
 * Shared
 *****************************************************************************/

configs.shared = {
  entry: {
    app: [
      './src/app/index.js',
    ],
    vendor: [
      'axios',
      'highlight.js',
      'history',
      'html',
      'invariant',
      'jquery',
      'ramda',
      'react',
      'react-css-modules',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-simple-router',
      'redux-thunk',
      'rsvp',
      'scroll-behavior',
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: prodBundleNames.js,
    publicPath: '/',
  },

  plugins: [
    new webpackPlugins.html({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      VERSION,
    }),
  ],

  resolve: {
    root: [
      // for relative paths in css
      path.resolve('./src'),
      path.resolve('./src/assets'),
    ],
    alias: {
      config: path.join(
        __dirname,
        'config',
        (process.env.NODE_ENV === 'production') ? process.env.NODE_ENV : 'default'
      ),
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
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        loaders: ['html'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: [
          // inline ULRS for <= 8k images, direct URLs else
          'url-loader?limit=8192',
          // run image-min when not in debug
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      },
    ],
  },

  postcss() {
    return [
      require('postcss-import'),
      require('autoprefixer'),
      require('precss'),
    ]
  },
}

/*****************************************************************************
 * Production (for builds)
 *****************************************************************************/

configs.prod = Object.assign({}, configs.shared, {
  output: Object.assign({}, configs.shared.output, {
    filename: prodBundleNames.js,
  }),

  plugins: configs.shared.plugins.concat([
    new webpackPlugins.extractText(prodBundleNames.css),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ]),

  module: Object.assign({}, configs.shared.module, {
    loaders: configs.shared.module.loaders.concat([
      {
        test: /\.scss$/,
        loader: webpackPlugins.extractText.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss!sass'
        ),
        include: [
          path.resolve('./src'),
        ],
      },
      {
        test: /\.css$/,
        loader: webpackPlugins.extractText.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'
        ),
        include: [
          path.resolve('./src'),
        ],
      },
    ]),
  }),
})

/*****************************************************************************
 * dev
 *****************************************************************************/

configs.dev = Object.assign({}, configs.shared, {
  // http://webpack.github.io/docs/build-performance.html
  // recommendation: 'eval-source-map',
  // 'eval' is the fastest if you don't care about source-map
  devtool: 'eval-source-map',

  output: Object.assign({}, configs.shared.output, {
    filename: bundleNames.js,
  }),

  entry: Object.assign({}, configs.shared.entry, {
    app: configs.shared.entry.app.concat([
      'webpack-hot-middleware/client?reload=true',
    ]),
  }),

  plugins: configs.shared.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]),

  // run loaders in debug mode
  debug: true,

  module: Object.assign({}, configs.shared.module, {
    loaders: configs.shared.module.loaders.concat([
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
          'postcss',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]$sourceMap',
          'postcss',
        ],
      },
    ]),
  }),
})

module.exports = (process.env.NODE_ENV === 'production') ? configs.prod : configs.dev
