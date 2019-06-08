const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');

/**
 * Webpack Configuration
 */
module.exports = {
    mode: 'production',

    devtool: 'source-map',
    entry: {
        'components': path.join(dirApp, 'components'),
        'webcomponents-loader': path.join(dirApp, 'webcomponents-loader'),
        'polyfills/webcomponents-sd-ce-pf': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd-ce-pf'),
        'polyfills/webcomponents-sd-ce': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd-ce'),
        'polyfills/webcomponents-sd': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-sd'),
        'polyfills/webcomponents-ce': path.join('@webcomponents/webcomponentsjs/bundles', 'webcomponents-ce')
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
            inject: 'body',
            // Order of the script tags is important here. The polyfills have to load first.
            chunks: ['webcomponents-loader', 'components'],
            chunksSortMode: 'manual'
        }),
        // new ScriptExtHtmlWebpackPlugin({
        //     module: ['bundle.js']
        // })
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