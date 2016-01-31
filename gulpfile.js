'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const webpack = require('webpack');
const swPrecache = require('sw-precache');
const path = require('path');

const config = {
  src: 'src',
  dist: 'dist',
  port: 8080,
};

gulp.task('lint:js', () => {
  return gulp.src([
    './gulpfile.js',
    config.src + '/**/*.js',
    '!' + 'node_modules/**/*',
    '!' + 'dist/**/*',
  ])
  .pipe($.gitmodified(['added']))
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError());
});

gulp.task('lint:scss', () => {
  return gulp.src([
    config.src + '/**/*.scss',
    '!' + 'node_modules/**/*',
    '!' + 'dist/**/*',
  ])
  .pipe($.gitmodified(['added']))
  .pipe($.scssLint({
    config: '.scss-lint.yml',
  }))
  .pipe($.scssLint.failReporter('E'))
});

gulp.task('clean', done => {
  const del = require('del');

  del([
    config.dist,
  ], {force: true})
  .then(() => {
    done();
  });
});

gulp.task('others', () => {
  return gulp.src([
    '!' + config.src + '/**/*.html',
    '!' + config.src + '/**/*.js',
    '!' + config.src + '/**/*.jsx',
    '!' + config.src + '/**/*.scss',
    '!' + config.src + '/**/*.css',
    config.src + '/**/*.*',
  ])
  .pipe(gulp.dest(config.dist));
});

gulp.task('move:index', () => {
  return gulp.src([
    config.src + '/index.html',
  ])
  .pipe(gulp.dest(config.dist));
});

gulp.task('generate-service-worker', done => {
  swPrecache.write(path.join(config.dist, 'service-worker.js'), {
    staticFileGlobs: [config.dist + '/**/*.{js,html,css,png,jpg,gif}'],
    stripPrefix: config.dist,
  }, done);
});

gulp.task('webpack-build', done => {
  process.env.NODE_ENV = 'production';
  const wpConfig = require('./webpack.config.prod.js');

  webpack(wpConfig, (e, stats) => {
    if (e) throw new $.util.PluginError('webpack', e);
    $.util.log('[webpack]', stats.toString());
    done();
  });
});

gulp.task('server:dev', done => {
  const express = require('express');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const wpConfig = require('./webpack.config.dev.js');

  const compiler = webpack(wpConfig);

  const app = express();

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: wpConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use(express.static('src'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
  });

  app.listen(config.port, 'localhost', e => {
    if (e) return console.log(e);
    console.log(`
                serving app on port ${config.port}
                `);
                done();
  });
});

gulp.task('server:dist', done => {
  const express = require('express');

  const app = express();

  app.use(express.static('dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  app.listen(config.port, 'localhost', e => {
    if (e) return console.log(e);
    console.log(`
                serving app on port ${config.port}
                `);
                done();
  });
});


/***********************************************
 *			Exposed Gulp Functions	           *
 ***********************************************/

gulp.task('default', ['server:dev']);

gulp.task('build', done => {
  runSequence(
    'clean',
    ['move:index', 'others', 'webpack-build'],
    'generate-service-worker'
  );
});

// Lint all js files added and modified in git
gulp.task('lint', ['lint:js', 'lint:scss']);
