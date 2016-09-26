// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin("[name].css");

module.exports = {
    module: {
        loaders: [
            { test: /\.less$/, loader: extractLESS.extract(["css", "less"]) },
        ]
    },
    plugins: [
        extractLESS,
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            minimize: true,
            mangle: true
        })
    ]
};