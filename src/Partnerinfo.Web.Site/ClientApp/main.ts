﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as i18next from "i18next";
import * as i18nextBLD from "i18next-browser-languagedetector";
import * as i18nextXHR from "i18next-xhr-backend";
import * as ko from "knockout";
import * as koValidation from "knockout.validation";

import app from "./src/app";

// Using deferred updates ensures that computed observables and bindings are updated only after their dependencies are stable.
// Even if an observable might go through multiple intermediate values, only the latest value is used to update its dependencies.
// http://knockoutjs.com/documentation/deferred-updates.html
ko.options.deferUpdates = true;

// Initialize Knockout validation before binding data.
// https://github.com/Knockout-Contrib/Knockout-Validation/wiki/Configuration
koValidation.init({
    errorElementClass: "ui-validation-error-in", // class to decorate error element
    errorMessageClass: "ui-validation-error",    // class to decorate error message 
    decorateInputElement: true
});

// Load and register the <pi-app> component.
ko.components.register("pi-app", app);

// Initialize i18next localization services with
// browser culture detection and XHR json loader.
i18next
    .use(i18nextBLD)
    .use(i18nextXHR)
    .init({
        backend: {
            addPath: "strings/{{lng}}/{{ns}}.json",
            loadPath: "strings/{{lng}}/{{ns}}.json"
        },
        debug: false,
        detection: {
            order: ["cookie"],
            caches: ["cookie"],
            lookupCookie: "PI-CLR"
        },
        fallbackLng: "en-GB",
        load: "currentOnly",
        ns: ["shared"]
    },
    (error: any, t: i18next.TranslationFunction) => {
        // Tell Knockout to start up an instance of the application after
        // loading the specified language resources.
        ko.applyBindings();
    });

// Basic hot reloading support. Automatically reloads and restarts the Knockout app each time
// you modify source files. This will not preserve any application state other than the URL.
declare var module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        ko.cleanNode(document.body);
        ko.i18n.language = undefined;
    });
}