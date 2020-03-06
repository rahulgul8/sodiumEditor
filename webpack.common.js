var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }, {
                test: /\.css$/i,
                use: ['style-loader'],
            }, {
                test: /\.css$/,
                use: {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};