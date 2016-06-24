process.env.NODE_ENV = 'test'
const isTravis = process.env.CONTINUOUS_INTEGRATION
const webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    // port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [
      isTravis ? 'PhantomJS' : 'Chrome',
    ],
    singleRun: false,
    frameworks: [
      'mocha',
    ],
    files: [
      {
        pattern: './test/**/*.spec.js?(x)',
        watched: false,
        included: true,
        served: true,
      },
    ],
    preprocessors: {
      './test/**/*.spec.js?(x)': [
        'webpack',
        'sourcemap',
      ],
    },
    reporters: [
      'dots',
      'mocha',
    ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  })
}
