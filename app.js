const path = require('path');
const express = require('express');
const app = express();

// route handlers
app.get('/users', (req,res) => res.send('respond with a resource'));

if(process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('*', (req,res) => res.sendFile(path.join(__dirname, 'public/index.html')));
}

module.exports = app;