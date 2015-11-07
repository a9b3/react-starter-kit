const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [
            hotMiddlewareScript,
            './src/index.js',
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                // query: {
                //     presets: ['es2015', 'react'],
                //     cacheDirectory: true,
                // }
            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'autoprefixer', 'sass'],
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
    }
};
