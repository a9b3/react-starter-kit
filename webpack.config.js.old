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
  },

  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: prodBundleNames.js,
    chunkFilename: '[name].bundle.[hash:5].js',
    publicPath: '/',
  },

  plugins: [
    new webpackPlugins.html({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),

    // puts common imports into vendor file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      VERSION,
    }),
  ],

  resolve: {
    modules: [
      // for relative paths, precedence over node_modules
      path.resolve('./src'),
      path.resolve('./src/app'),
      'node_modules',
    ],
    alias: {
      // import config from 'config'
      config: path.join(
        __dirname,
        'config',
        (process.env.NODE_ENV === 'production') ? process.env.NODE_ENV : 'default'
      ),
    },
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'baggage?[file].scss=styles',
          },
        ],
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
        loader: "url?mimetype=application/octet-stream",
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
    // merges similar chunks
    new webpack.optimize.DedupePlugin(),

    // don't create chunks if they are too small
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200,
    }),
    new webpackPlugins.extractText(prodBundleNames.css),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compressor: {
        warnings: false,
      },
    }),
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
      `webpack-dev-server/client?http://localhost:${process.env.PORT || 8080}/`,
      'webpack/hot/only-dev-server',
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
          // note that sourceMap will make file-loader not work, just use
          // url-loader for dev environments
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
          'postcss',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]$sourceMap',
          'postcss',
        ],
      },
    ]),
  }),
})

module.exports = (process.env.NODE_ENV === 'production') ? configs.prod : configs.dev
