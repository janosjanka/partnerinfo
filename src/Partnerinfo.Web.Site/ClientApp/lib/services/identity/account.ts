// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="account.d.ts" />
import { api } from "../core";

/**
 * Logs In using an authentication provider as a HTTP POST operation.
 *
 * @options options
 * @returns {Promise}
 */
export function loginAsync(options: PI.Identity.LoginOptions): PromiseLike<any> {
    return api({
        path: "account/login",
        method: "post",
        params: options
    });
}

/**
 * Registers a new account as a HTTP POST operation.
 *
 * @options options
 * @returns {Promise}
 */
export function registerAsync(options: PI.Identity.RegisterOptions): PromiseLike<any> {
    return api({
        path: "account/register",
        method: "post",
        params: options
    });
}

/**
 * Unregisters an existing account as a HTTP POST operation.
 *
 * @options options
 * @returns {Promise}
 */
export function unregisterAsync(options: PI.Identity.LoginOptions): PromiseLike<any> {
    return api({
        path: "account/unregister",
        method: "post",
        params: options
    });
}