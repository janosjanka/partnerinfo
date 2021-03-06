﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

interface ValidationErrorsParams {
    /** An observable array of validation error messages. */
    errors: KnockoutObservableArray<any>;
}

class ValidationErrors {
    /** An [observable] array of validation error message objects or strings. */
    errors: KnockoutObservableArray<any>;

    /** Initializes a new instance of the ValidationErrors control. */
    constructor(params: ValidationErrorsParams) {
        this.errors = params.errors;
    }
}

export default {
    viewModel: ValidationErrors,
    template: require("./validationerrors.html")
};