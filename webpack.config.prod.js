const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/index.js',
        ],
    },
    output: {
        path: path.join(__dirname, 'dist', 'static'),
        filename: '[name].bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        })
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
