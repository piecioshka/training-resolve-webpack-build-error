'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        'my-own-lib': './index',
        'my-own-lib.min': './index'
    },

    devtool: 'source-map',

    output: {
        library: 'MyOwnLibrary',
        libraryTarget: 'umd',

        filename: '[name].js',
        path: './dist',
        pathinfo: true
    },

    module: {
        loaders: [
            {
                test: /\.json/,
                exclude: /executor\/node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.js/,
                exclude: /executor\/node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
