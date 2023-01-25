// webpack.config.js
// `webpack` command will pick up this config setup by default
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = (env) => {
    return {
        mode: 'none',
        entry: {
            common: './src/index.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            port: 9000,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [{loader: MiniCssExtractPlugin.loader}, "css-loader", "postcss-loader", "sass-loader"]
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: 'index.html'}),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin(),
            autoprefixer
        ]
    }
};