// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const debug = process.argv.indexOf("--release") < 0;

const path = require("path");
const webpack = require("webpack");
const webpackExtractTxt = require("extract-text-webpack-plugin");
const webpackExtractCss = new webpackExtractTxt("[name].css");

const srcFolder = "ClientApp";
const outFolder = "dist";

module.exports = {
    output: {
        path: path.join(__dirname, "wwwroot", outFolder),
        filename: `[name].js`,
        publicPath: `/${outFolder}/`
    },
    entry: {
        main: [`./${srcFolder}/main.ts`]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: new RegExp(srcFolder), loader: "ts", query: { silent: true } },
            { test: /\.html$/, loader: "raw" },
            { test: /\.less$/, loader: debug ? "style!css!less" : webpackExtractCss.extract(["css", "less"]) },
            { test: /\.css$/, loader: debug ? "style!css" : webpackExtractCss.extract(["css"]) },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./wwwroot/${outFolder}/corefx-manifest.json`)
        })
    ].concat(debug ? [
        // Plugins that apply in development builds only.
        new webpack.SourceMapDevToolPlugin({
            moduleFilenameTemplate: "../../[resourcePath]"
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