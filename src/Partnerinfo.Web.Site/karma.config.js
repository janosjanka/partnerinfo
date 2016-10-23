// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

module.exports = function (config) {
    config.set({
        files: [
          { pattern: "test/*_test.js", watched: false },
          { pattern: "test/**/*_test.js", watched: false }
        ],
        preprocessors: {
            "test/*_test.js": ["webpack"],
            "test/**/*_test.js": ["webpack"]
        },
        webpack: {
            devtool: "inline-source-map"
        },
        webpackMiddleware: {
            stats: "errors-only"
        }
    });
};