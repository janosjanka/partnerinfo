// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const isDevBuild = process.argv.indexOf("--dist") < 0;

const path = require("path");
const webpack = require("webpack");
const WebpackTextPlugin = require("extract-text-webpack-plugin");
const webpackExtractCss = new WebpackTextPlugin("[name].css");

const srcFolderName = "ClientApp";
const dstFolderName = "dist";
const dstRelativePath = path.join("wwwroot", dstFolderName);

module.exports = {
    output: {
        path: path.join(__dirname, dstRelativePath),
        filename: `[name].js`,
        publicPath: `/${dstFolderName}/`
    },
    entry: {
        main: [`./${srcFolderName}/main.ts`]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: new RegExp(srcFolderName), loader: "ts", query: { silent: true } },
            { test: /\.html$/, loader: "raw" },
            { test: /\.less$/, loader: isDevBuild ? "style!css!less" : webpackExtractCss.extract(["css", "less"]) },
            { test: /\.css$/, loader: isDevBuild ? "style!css" : webpackExtractCss.extract(["css"]) },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./${dstRelativePath}/corefx-manifest.json`)
        })
    ].concat(isDevBuild ? [
        // Plugins that apply in development builds only.
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
            moduleFilenameTemplate: path.relative(dstRelativePath, "[resourcePath]")
        })
    ] : [
        // Plugins that apply in production builds only.
        webpackExtractCss,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            minimize: true,
            mangle: true
        })
    ])
};