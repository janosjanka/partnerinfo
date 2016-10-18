// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

interface KnockoutExtenders {
    /** Configures i18n options. */
    i18nOptions(target: any, options: I18next.TranslationOptions): any;

    /** Represents the localized name of the specified target object. */
    displayName(target: any, displayName: string): any;

    /** Represents the localized description of the specified target object. */
    description(target: any, description: string): any;
}

interface KnockoutI18nStatic {
    /** Gets or sets the current i18n language. */
    language: string;

    /** Gets an array of i18n languages. */
    languages: string[];

    /**
     * Returns a KO pure computed that will be updated immediately when the current language changes.
     *
     * @param {string}  key     The key to localize.
     * @param {options} options Translation options.
     */
    t(key: string, options?: I18next.TranslationOptions): KnockoutComputed<string>;
}

interface KnockoutStatic {
    i18n: KnockoutI18nStatic;
}