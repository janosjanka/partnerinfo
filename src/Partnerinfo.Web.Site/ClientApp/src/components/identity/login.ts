// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";
import * as kod from "../../decorators/knockout";
import * as koValidation from "knockout.validation";
import * as i18n from "i18next";

import { LoginModel, AccountService } from "../../services/identity/account";

interface LoginParams {
    service?: AccountService,
    options?: LoginModel
}

/** Used to log in a user to the system. */
class LoginViewModel implements Validable, Serializable {
    service: AccountService;
    email: KnockoutObservable<string>;
    password: KnockoutObservable<string>;
    validationErrors: KnockoutValidationErrors;

    /** Initializes a new instance of the class. */
    constructor(params: LoginParams = {}) {
        this.service = params.service || AccountService.default;

        this.email = ko.observable<string>(params.options && params.options.email)
            .extend({
                displayName: "shared:identity.login.email",
                description: "shared:identity.login.emailDescription",
                required: {
                    message: "{0}",
                    params: ko.i18n.t("shared:identity.login.emailRequired")
                }
            });
        this.password = ko.observable<string>(params.options && params.options.password)
            .extend({
                displayName: "shared:identity.login.password",
                description: "shared:identity.login.passwordDescription",
                required: {
                    message: "{0}",
                    params: ko.i18n.t("shared:identity.login.passwordRequired")
                }
            });

        this.validationErrors = koValidation.group([this.email, this.password]);
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
    toObject(): LoginModel {
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