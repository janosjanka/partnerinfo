// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const isDevBuild = process.argv.indexOf("--dist") < 0;

const path = require("path");
const webpack = require("webpack");
const WebpackTextPlugin = require("extract-text-webpack-plugin");
const webpackExtractCss = new WebpackTextPlugin("[name].css");

const srcFolder = "ClientApp";
const outFolder = "dist";

module.exports = {
    output: {
        path: path.join(__dirname, "wwwroot", outFolder),
        filename: "[name].js",
        library: "[name]_[hash]",
    },
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: webpackExtractCss.extract(["css", "less"]) },
            { test: /\.css$/, loader: webpackExtractCss.extract(["css"]) },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    },
    entry: {
        corefx: [
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
    plugins: [
        webpackExtractCss,
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, "wwwroot", outFolder, "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ].concat(isDevBuild ? [
        // Plugins that apply in development builds only.
    ] : [
        // Plugins that apply in production builds only.
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            minimize: true,
            mangle: true
        })
    ])
};
