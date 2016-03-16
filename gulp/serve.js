const express = require('express')
const gulp = require('gulp')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function serve(config) {
  gulp.task('serve:dev', done => {
    const wpConfig = require('../webpack.config.js')
    const compiler = webpack(wpConfig)

    const app = express()

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: wpConfig.output.publicPath,
    }))

    app.use(webpackHotMiddleware(compiler))

    // static assets
    app.use(express.static('src'))

    // let client handle page routing
    app.get('*', (req, res, next) => {
      // using html webpack injection, serve the index.html file in memory
      const filename = path.join(compiler.outputPath, 'index.html')
      compiler.outputFileSystem.readFile(filename, (e, content) => {
        if (e) return next(e)
        res.set('content-type', 'text/html')
        res.send(content)
      })
    })

    app.listen(config.port, 'localhost', e => {
      if (e) return console.log(e)
      console.log(`
        serving app on port ${config.port}
      `)
      done()
    })
  })

  gulp.task('serve:dist', done => {
    const app = express()

    app.use(express.static('../dist'))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
    })

    app.listen(config.port, 'localhost', e => {
      if (e) return console.log(e)
      console.log(`
        serving app on port ${config.port}
      `)
      done()
    })
  })
}
