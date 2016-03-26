const path = require('path')
const webpack = require('webpack')
const webpackPlugins = require('webpack-load-plugins')()

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

const sharedPlugins = [
  new webpackPlugins.html({
    filename: 'index.html',
    template: './src/index.html',
    inject: true,
  }),
]

const sharedLoaders = [
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
    test: /\.(png|jpg|jpeg)$/,
    // inline ULRS for <= 8k images, direct URLs else
    loaders: ['url-loader?limit=8192'],
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
]

/*****************************************************************************
 * Production (for builds)
 *****************************************************************************/

configs.prod = {
  entry: [
    './src/index.js',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: prodBundleNames.js,
    publicPath: '/',
  },

  plugins: sharedPlugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpackPlugins.extractText(prodBundleNames.css),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ]),

  resolve: {
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
    loaders: sharedLoaders.concat([
      {
        test: /\.scss$/,
        loader: webpackPlugins.extractText.extract(
          'style-loader',
          'css?modules&importLoaders=2&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!sass'
        ),
      },
      {
        test: /\.css$/,
        loader: webpackPlugins.extractText.extract(
          'style',
          'css?modules&importLoaders=2&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!sass'
        ),
      },
    ]),
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
 * dev
 *****************************************************************************/

configs.dev = Object.assign({}, configs.prod, {
  // http://webpack.github.io/docs/build-performance.html
  // recommendation: 'eval-source-map',
  // 'eval' is the fastest if you don't care about source-map
  devtool: 'eval-source-map',

  output: Object.assign({}, configs.prod.output, {
    filename: bundleNames.js,
  }),

  entry: [
    'webpack-hot-middleware/client?reload=true',
  ].concat(configs.prod.entry),

  plugins: sharedPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]),

  module: {
    loaders: sharedLoaders.concat([
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
  },
})

module.exports = (process.env.NODE_ENV === 'production') ? configs.prod : configs.dev
