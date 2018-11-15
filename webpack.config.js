// const webpack = require('webpack');
// const path = require('path');

module.exports = {
    entry: [
        './examples/src/App.js',
    ],
    output: {
        publicPath: '/examples',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname,
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
