/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import * as ko from "knockout";
import * as koValidation from "knockout.validation";
import * as i18n from "i18next";
import * as auth from "../@api/auth";

class LoginViewModel {
    email: KnockoutObservable<string>;
    password: KnockoutObservable<string>;
    validationErrors: KnockoutValidationErrors;
    submitText: KnockoutComputed<string>;

    constructor() {
        this.email = ko.observable<string>().extend({
            displayName: "shared:account.login.email",
            description: "shared:account.login.emailDescription",
            required: {
                message: "{0}",
                params: ko.i18n.t("shared:account.login.emailRequired")
            }
        });
        this.password = ko.observable<string>().extend({
            displayName: "shared:account.login.password",
            description: "shared:account.login.passwordDescription",
            required: {
                message: "{0}",
                params: ko.i18n.t("shared:account.login.passwordRequired")
            }
        });
        this.validationErrors = koValidation.group(this);
        this.submitText = ko.i18n.t("shared:account.login.submit");
    }

    onSubmit(): void {
        if (!this.validate()) {
            return;
        }
        auth.login({
            email: this.email(),
            password: this.password()
        }).then(
            value => {
                if (value.error) {
                    alert(value.error.status);
                    return;
                }
                alert("COMPLETED SUCCESSFUL.");
            });
    }

    validate(): boolean {
        this.validationErrors.showAllMessages();
        return this.validationErrors().length === 0;
    }
}

export default {
    viewModel: LoginViewModel,
    template: require("./login.html")
};