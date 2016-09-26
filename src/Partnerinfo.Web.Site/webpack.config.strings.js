// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const path = require("path");
const webpack = require("webpack");

const isDevEnv = process.env.ASPNETCORE_ENVIRONMENT === "Development";
const srcFolder = "ClientApp";
const outFolder = "strings";
const languages = ["en-GB", "hu-HU"];

module.exports = languages.map(function (lng) {
    return {
        resolve: {
            extensions: ["", ".json"]
        },
        module: {
            loaders: [
                { test: /\.json$/, loader: "json-loader" }
            ]
        },
        entry: {
            shared: [
                `./${srcFolder}/strings/${lng}/shared`,
            ]
        },
        output: {
            path: path.join(__dirname, "wwwroot", outFolder, lng),
            filename: "[name].js",
            library: "[name]_[hash]"
        },
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
                comments: false,
                minimize: true,
                mangle: true
            })
        ]
    };
});