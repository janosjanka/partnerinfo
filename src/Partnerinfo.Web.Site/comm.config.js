// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

const debug = process.argv.indexOf("--dist") < 0;

const appRoot = "ClientApp";
const appSrcName = "src";
const appLessName = "less";
const appSpecName = "spec";

const outRoot = "wwwroot";
const outDistName = "dist";

module.exports = {
    /** True if the configuration is for debug. */
    debug: debug,

    /** App folder names & paths. */
    appRoot: appRoot,
    appSrcName: appSrcName,
    appSrcPath: `${appRoot}/${appSrcName}`,
    appLessName: appLessName,
    appLessPath: `${appRoot}/${appLessName}`,
    appSpecName: appSpecName,
    appSpecPath: `${appRoot}/${appSpecName}`,

    /** Out folder names & paths. */
    outRoot: outRoot,
    outDistName: outDistName,
    outDistPath: `${outRoot}/${outDistName}`
};