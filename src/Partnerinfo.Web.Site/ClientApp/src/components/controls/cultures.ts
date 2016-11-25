// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

class CultureInfo {
    language: string;
    displayName: string;
    isActive: KnockoutComputed<boolean>;

    constructor(language: string, displayName: string) {
        this.language = language;
        this.displayName = displayName;
        this.isActive = ko.pureComputed<boolean>(() => this.language === ko.i18n.language, this);
    }

    dispose(): void {
        this.isActive.dispose();
    }
}

class CultureListViewModel {
    languages: Array<CultureInfo> = [
        new CultureInfo("en-GB", "English (GB)"),
        new CultureInfo("hu-HU", "Hungarian")
    ];

    changeLanguage(info: CultureInfo): void {
        ko.i18n.language = info.language;
    }

    dispose(): void {
        this.languages.forEach(info => info.dispose());
    }
}

export default {
    viewModel: CultureListViewModel,
    template: require("./cultures.html")
};