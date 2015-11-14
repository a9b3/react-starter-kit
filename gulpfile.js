'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const del = require('del');

const config = {
    src: 'src',
    dist: 'dist',
};

/**
 * Lint all js files added and modified in git
 */
gulp.task('lint', ['lint:js', 'lint:scss']);

gulp.task('lint:js', () => {
    return gulp.src([
        './gulpfile.js',
        config.src + '/**/*.js',
        '!' + 'node_modules/**/*',
        '!' + 'dist/**/*',
    ])
    .pipe($.gitmodified(['added', 'modified']))
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
    .pipe($.gitmodified(['added', 'modified']))
    .pipe($.scssLint({
      config: '.scss-lint.yml',
    }))
    .pipe($.scssLint.failReporter('E'))
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

gulp.task('clean', done => {
    del([
        config.dist,
    ], {force: true})
    .then(() => {
        done();
    });
});

gulp.task('move:index', ['clean'], () => {
    return gulp.src([
        config.src + '/index.html',
    ])
    .pipe(gulp.dest(config.dist));
});

gulp.task('build', ['move:index', 'others'], done => {
    process.env.NODE_ENV = 'production';
    const wpConfig = require('./webpack.config.prod.js');
    webpack(wpConfig, (e, stats) => {
        if (e) throw new $.util.PluginError('webpack', e);
        $.util.log('[webpack]', stats.toString());
        done();
    });
});

gulp.task('dev-server', done => {
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

    app.listen(8080, 'localhost', e => {
        done();
        if (e) {
            console.log(e);
            return;
        }
        console.log('dev server listening on port 8080');
    });
});

gulp.task('default', ['dev-server']);
