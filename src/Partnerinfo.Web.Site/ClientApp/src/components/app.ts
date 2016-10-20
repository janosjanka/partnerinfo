// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import "bootstrap";
import * as ko from "knockout";
import "ko-component-router";

import navbar from "./shared/navbar";
import footer from "./shared/footer";
import identityLogin from "./identity/login";
import identityRegister from "./identity/register";

class AppViewModel implements Disposable {
    /** A set of key/value pairs that configure component routing for KnockoutJS. */
    routes: Object;

    constructor() {
        this.routes = {
            "/": "pi-home",
            "/about": "pi-about"
        };

        // Load and register all the KO components needed to handle the routes.
        // The optional 'bundle?lazy!' prefix is a Webpack feature that causes the referenced modules
        // to be split into separate files that are then loaded on demand.
        // For docs, see https://github.com/webpack/bundle-loader.

        ko.components.register("pi-navbar", navbar);
        ko.components.register("pi-footer", footer);
        ko.components.register("pi-home", require("bundle?lazy!./shared/home"));
        ko.components.register("pi-about", require("bundle?lazy!./shared/about"));

        ko.components.register("pi-identity-login", identityLogin);
        ko.components.register("pi-identity-register", identityRegister);
    }

    dispose(): void {
        // To support hot module replacement, this method unregisters the router and KO components.
        // In production scenarios where hot module replacement is disabled, this would not be invoked.
        Object.getOwnPropertyNames((ko.components as any)._allRegisteredComponents)
            .forEach(componentName => {
                if (componentName.indexOf("pi-") === 0) {
                    ko.components.unregister(componentName);
                }
            });
    }
}

export default {
    viewModel: AppViewModel,
    template: require("./app.html")
};