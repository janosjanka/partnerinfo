// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const path = require("path");
const webpack = require("webpack");
const webpackExtractText = require("extract-text-webpack-plugin");
const webpackExtractCSS = new webpackExtractText("[name].css");
const webpackExtractLESS = new webpackExtractText("[name].css");

const isDevEnv = process.env.ASPNETCORE_ENVIRONMENT === "Development";
const srcFolder = "ClientApp";
const outFolder = "release";

module.exports = {
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        loaders: [{
            test: /\.css$/i,
            loader: webpackExtractCSS.extract(["css"])
        }, {
            test: /\.less$/i,
            loader: webpackExtractLESS.extract(["css", "less"])
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: "url-loader?limit=100000"
        }]
    },
    entry: {
        bootstrap: [
            "es6-promise",
            "jquery",
            "bootstrap",
            `./${srcFolder}/less/bootstrap.less`,
            "knockout",
            "knockout.validation",
            "knockout-bootstrap",
            "knockout-postbox",
            "ko-component-router",
            "i18next",
            "i18next-browser-languagedetector",
            "i18next-xhr-backend"
        ]
    },
    output: {
        path: path.join(__dirname, "wwwroot", outFolder),
        filename: "[name].js",
        library: "[name]_[hash]",
    },
    plugins: [
        webpackExtractCSS,
        webpackExtractLESS,
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, "wwwroot", outFolder, "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ].concat(
        isDevEnv ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
                comments: false,
                minimize: true,
                mangle: true
            })
        ])
};
