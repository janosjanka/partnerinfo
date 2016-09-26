/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import "bootstrap";
import * as ko from "knockout";
import "ko-component-router";

import cultures from "./cultures";
import navbar from "./navbar";
import footer from "./footer";
import accountLogin from "./account/login";
import accountRegister from "./account/register";

interface RouteInfo {
    /** Gets the localized name for a route entry. */
    name: KnockoutComputed<string>;
    /** Route info */
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
        ko.components.register("pi-navbar", navbar);
        ko.components.register("pi-footer", footer);
        ko.components.register("pi-cultures", cultures);
        ko.components.register("pi-account-login", accountLogin);
        ko.components.register("pi-account-register", accountRegister);

        ko.components.register("pi-home", require("bundle?lazy!./home/index"));
        ko.components.register("pi-about", require("bundle?lazy!./about/index"));
        ko.components.register("pi-account", require("bundle?lazy!./account/index"));
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