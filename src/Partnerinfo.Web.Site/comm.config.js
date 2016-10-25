// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

module.exports = {
    isDevBuild: process.argv.indexOf("--dist") < 0,
    srcFolderName: "ClientApp",
    dstFolderName: "dist",
    dstRelativePath: "wwwroot/dist"
};