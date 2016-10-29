// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const config = require("./common.config");
const path = require("path");
const webpack = require("webpack");
const WebpackTextPlugin = require("extract-text-webpack-plugin");
const webpackExtractCss = new WebpackTextPlugin("[name].css");

module.exports = {
    output: {
        path: path.join(__dirname, config.outDistPath),
        filename: `[name].js`,
        publicPath: `/${config.outDistName}/`
    },
    entry: {
        main: [`./${config.appRoot}/main.ts`]
    },
    resolve: {
        alias: {
            "@pi": path.resolve(config.appSrcPath),
        },
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: new RegExp(config.appRoot), loader: "ts", query: { silent: true } },
            { test: /\.html$/, loader: "raw" },
            { test: /\.less$/, loader: config.debug ? "style!css!less" : webpackExtractCss.extract(["css", "less"]) },
            { test: /\.css$/, loader: config.debug ? "style!css" : webpackExtractCss.extract(["css"]) },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./${config.outDistPath}/corefx-manifest.json`)
        })
    ].concat(config.debug ? [
        // Plugins that apply in development builds only.
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
            moduleFilenameTemplate: path.relative(config.outDistPath, "[resourcePath]")
        })
    ] : [
        // Plugins that apply in production builds only.
        webpackExtractCss,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: { warnings: false },
            mangle: { except: ["$"] },
            minimize: true
        })
    ])
};