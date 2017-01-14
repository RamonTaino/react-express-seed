const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'react-dom'
];

const config  = {
    entry: {
        bundle: './src/public/scripts/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'scripts/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader?importPlugins=1', 'postcss-loader']
                }),
                test: /\.css$/
            },
            {
                use: [
                    'url-loader?limit=40000',
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    //devtool: 'sourcemap',
    plugins: [
        new ExtractTextPlugin('styles/[name].[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            title: '[[ APP NAME ]]',
            template: 'src/public/tmpl/index.tmpl'
        })
    ]
};

module.exports = config;