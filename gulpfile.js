'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

gulp.task('dev-server', done => {
    const config = require('./webpack.config.dev.js');
    const compiler = webpack(config);
    const app = express();

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
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
