// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const commonConfig = require("./common.config");
const webpackConfig = require("./webpack.config");

const baseSearchPattern = `${commonConfig.appSpecPath}/*.ts`;
const specSearchPattern = `${commonConfig.appSpecPath}/**/*.spec.ts`;

module.exports = function (config) {
    config.set({
        // Base path that will be used to resolve all patterns (eg. files, exclude).
        basePath: ".",

        // Frameworks to use.
        // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],

        // List of files / patterns to load in the browser.
        files: [
            { pattern: baseSearchPattern, watched: false, served: true, included: true },
            { pattern: specSearchPattern, watched: true, served: true, included: true }
        ],

        // Preprocess matching files before serving them to the browser.
        // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            [baseSearchPattern]: ["typescript", "sourcemap"],
            [specSearchPattern]: ["webpack"]
        },

        // 
        // Available options: https://www.npmjs.com/package/karma-typescript-preprocessor2
        typescriptPreprocessor: {
            tsconfigPath: "./tsconfig.json",

            // Ignore all files that ends with .d.ts (this files will not be served).
            ignorePath: function (path) {
                return /\.d\.ts$/.test(path);
            },

            // Transforming the filenames you can pass more than one, they will be execute in order.
            transformPath: [function (path) {
                return path.replace(/\.ts$/, ".js");
            }, function (path) {
                return path.replace(/[\/\\]spec[\/\\]/i, "/");
            }]
        },

        // Webpack configuration.
        // Karma watches the test entry points (you don't need to specify
        // the entry option) webpack watches dependencies.
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        // Test results reporter to use.
        // Possible values: "dots", "progress", "kjhtml", "coverage".
        // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["dots", "progress", "kjhtml"],

        // Web server port.
        port: 9876,

        // Enable / disable colors in the output (reporters and logs).
        colors: true,

        // Level of logging.
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG.
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes.
        autoWatch: false,

        // Start these browsers.
        // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Continuous Integration mode.
        // If true, Karma captures browsers, runs the tests and exits.
        singleRun: true
    });
};