'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const config = {
    dist: 'dist',
};

gulp.task('clean', done => {
    del([
        config.dist,
    ], {force: true})
    .then(() => {
        done();
    });
});

gulp.task('build', done => {
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
