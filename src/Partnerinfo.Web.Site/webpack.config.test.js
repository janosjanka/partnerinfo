// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const debug = process.argv.indexOf("--release") < 0;

const path = require("path");
const webpack = require("webpack");
const WebpackJasminePlugin = require("jasmine-webpack-plugin");

const srcFolder = "ClientApp";
const outFolder = "spec";

module.exports = {
    output: {
        path: path.join(__dirname, "wwwroot", outFolder),
        filename: `[name].js`,
        publicPath: `/${outFolder}/`
    },
    entry: {
        spec: [
            "jasmine-core",
            "jasmine-reporters",
            `./${srcFolder}/spec.ts`
        ]
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
        new WebpackJasminePlugin({
            filename: "specRunner.html"
        })
    ]
};
