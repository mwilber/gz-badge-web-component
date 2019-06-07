const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');

/**
 * Webpack Configuration
 */
module.exports = {
    mode: 'production',

    devtool: 'source-map',
    entry: {
        //'webcomponents-loader': path.join('@webcomponents/webcomponentsjs', 'webcomponents-loader'),
        'polyfills/bundles/webcomponents-sd-ce-pf': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd-ce-pf'),
        'polyfills/bundles/webcomponents-sd-ce': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd-ce'),
        'polyfills/bundles/webcomponents-sd': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd'),
        'polyfills/bundles/webcomponents-ce': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-ce'),
        bundle: path.join(dirApp, 'main')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        modules: [
            dirNode,
            dirApp
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            chunks: ['bundle', 'webcomponents-loader']
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },
            // SVG
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};