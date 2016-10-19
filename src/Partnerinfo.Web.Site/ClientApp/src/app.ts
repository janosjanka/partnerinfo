// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import "bootstrap";
import * as ko from "knockout";
import "ko-component-router";

import appNavBar from "./app-navbar";
import appFooter from "./app-footer";

import cultures from "./shared/cultures";

import identityLogin from "../lib/components/identity/login";
import identityRegister from "../lib/components/identity/register";

interface RouteInfo {
    name: KnockoutComputed<string>;
    route: { path: string, component: string | Function }
}

const appRoutes = {
    "/": "pi-home",
    "/about": "pi-about",
    "/account": "pi-account"
};

class AppViewModel {
    /** A set of key/value pairs that configure component routing for KnockoutJS. */
    routes: Object;

    constructor() {
        this.routes = appRoutes;

        // Load and register all the KO components needed to handle the routes.
        // The optional 'bundle?lazy!' prefix is a Webpack feature that causes the referenced modules
        // to be split into separate files that are then loaded on demand.
        // For docs, see https://github.com/webpack/bundle-loader.

        ko.components.register("pi-app-navbar", appNavBar);
        ko.components.register("pi-app-footer", appFooter);

        ko.components.register("pi-cultures", cultures);

        ko.components.register("pi-identity-login", identityLogin);
        ko.components.register("pi-identity-register", identityRegister);

        ko.components.register("pi-home", require("bundle?lazy!./shared/home"));
        ko.components.register("pi-about", require("bundle?lazy!./shared/about"));
    }

    dispose() {
        // To support hot module replacement, this method unregisters the router and KO components.
        // In production scenarios where hot module replacement is disabled, this would not be invoked.
        Object.getOwnPropertyNames((ko.components as any)._allRegisteredComponents)
            .forEach(componentName => {
                if (componentName.indexOf("pi-") >= 0) {
                    ko.components.unregister(componentName);
                }
            });
    }
}

export default {
    viewModel: AppViewModel,
    template: require("./app.html")
};