// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

module.exports = {
    devtool: "inline-source-map",
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
};