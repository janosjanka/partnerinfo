// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="account.d.ts" />
import * as core from "../core";

export default class {

    /** Logs In using an authentication provider as a HTTP POST operation. */
    login(options: LoginOptions): PromiseLike<void> {
        return core.api<void>({
            path: "account/login",
            method: "post",
            params: options
        });
    }

    /** Registers a new account as a HTTP POST operation. */
    register(options: RegisterOptions): PromiseLike<void> {
        return core.api<void>({
            path: "account/register",
            method: "post",
            params: options
        });
    }

    /** Unregisters an existing account as a HTTP POST operation. */
    unregister(options: LoginOptions): PromiseLike<void> {
        return core.api<void>({
            path: "account/unregister",
            method: "post",
            params: options
        });
    }

}