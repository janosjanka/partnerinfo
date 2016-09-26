/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import * as ko from "knockout";

// This Knockout component loader integrates with Webpack's lazy-loaded bundle feature.
// ko.components.register("component", require("bundle?lazy!../some-path-to-a-js-or-ts-module"));
// and then it will be loaded on demand instead of being loaded up front.
ko.components.loaders.unshift({
    loadComponent: (name, componentConfig, callback) => {
        if (typeof componentConfig === "function") {
            (componentConfig as any)((loadedModule: any) => {
                if (loadedModule.__esModule && loadedModule.default) {
                    loadedModule = loadedModule.default;
                }
                ko.components.defaultLoader.loadComponent(name, loadedModule, callback);
            });
        } else {
            callback(null);
        }
    }
});
