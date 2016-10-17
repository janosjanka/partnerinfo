// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="knockout-i18n.d.ts" />
import * as ko from "knockout";
import * as i18next from "i18next";

const language = ko.observable<string>();

(<KnockoutStatic>ko).i18n = {
    get language() {
        return language();
    },
    set language(value: string) {
        i18next.changeLanguage(value, err => !err && language(value));
    },

    get languages(): string[] {
        return i18next.languages;
    },

    t: (key: string, options?: I18next.TranslationOptions): KnockoutComputed<string> =>
        ko.pureComputed<string>(() => language() ? i18next.t(key, options) : "")
};

ko.extenders.i18nOptions = (target: any, i18nOptions: I18next.TranslationOptions): any => {
    target.i18nOptions = i18nOptions;
    return target;
};

ko.extenders.displayName = (target: any, displayName: string): any => {
    target.displayName = ko.i18n.t(displayName, target.i18nOptions);
    return target;
};

ko.extenders.description = (target: any, description: string): any => {
    target.description = ko.i18n.t(description, target.i18nOptions);
    return target;
};

// This will notify all localizable dependencies about changes. 
i18next.on("languageChanged", lng => language(lng));