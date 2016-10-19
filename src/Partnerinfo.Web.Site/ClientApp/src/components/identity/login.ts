// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";
import * as koValidation from "knockout.validation";
import * as i18n from "i18next";

import { LoginOptions, AccountService } from "../../services/identity/account";

interface LoginParams {
    service?: AccountService,
    options?: LoginOptions
}

/** Used to log in a user to the system. */
class LoginViewModel implements Validable, Serializable {
    service: AccountService;
    email: KnockoutObservable<string>;
    password: KnockoutObservable<string>;
    validationErrors: KnockoutValidationErrors;

    /** Initializes a new instance of the LoginViewModel class. */
    constructor(params: LoginParams = {}) {
        this.service = params.service || AccountService.default;

        this.email = ko.observable<string>(params.options && params.options.email)
            .extend({
                displayName: "shared:account.login.email",
                description: "shared:account.login.emailDescription",
                required: {
                    message: "{0}",
                    params: ko.i18n.t("shared:account.login.emailRequired")
                }
            });
        this.password = ko.observable<string>(params.options && params.options.password)
            .extend({
                displayName: "shared:account.login.password",
                description: "shared:account.login.passwordDescription",
                required: {
                    message: "{0}",
                    params: ko.i18n.t("shared:account.login.passwordRequired")
                }
            });

        this.validationErrors = koValidation.group(this);
    }

    /** Submits login data. */
    submit(): void {
        this.validate() && this.service.login(this.toObject());
    }

    /** Gets a value indicating whether this object is valid. */
    get isValid(): boolean {
        return this.validationErrors().length === 0;
    }

    /** Validates this object and returns true if that is valid. */
    validate(): boolean {
        this.validationErrors.showAllMessages();
        return this.isValid;
    }

    /** Serializes this object to a native JS object. */
    toObject(): LoginOptions {
        return {
            email: this.email(),
            password: this.password()
        };
    }
}

export default {
    viewModel: LoginViewModel,
    template: require("./login.html")
};