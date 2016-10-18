// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackConfigDebug = require("./webpack.config.debug");
const webpackConfigRelease = require("./webpack.config.release");

const isDevEnv = process.env.ASPNETCORE_ENVIRONMENT === "Development";
const srcFolder = "ClientApp";
const outFolder = "dist";

module.exports = webpackMerge({
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: new RegExp(srcFolder), loader: "ts-loader?silent=true" },
            { test: /\.html$/, loader: "raw-loader" },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    entry: {
        main: [`./${srcFolder}/main.ts`]
    },
    output: {
        path: path.join(__dirname, "wwwroot", outFolder),
        filename: `[name].js`,
        publicPath: `/${outFolder}/`
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./wwwroot/${outFolder}/bootstrap-manifest.json`)
        })
    ]
}, isDevEnv ? webpackConfigDebug : webpackConfigRelease);