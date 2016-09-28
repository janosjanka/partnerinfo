/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import * as PI from "./core";

interface LoginOptions {
    email: string;
    password: string;
}

/** Represents user data for creating a new account. */
interface RegisterOptions {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}

/**
 * Logs In using an authentication provider as a HTTP POST operation.
 * @options loginInfo
 * @returns {Promise}
 */
function login(options: LoginOptions): PI.HttpAsyncResult<any> {
    return PI.api({
        path: "account/login",
        method: PI.HttpVerb.post,
        params: options
    });
}

/**
 * Registers a new account as a HTTP POST operation.
 * @options loginInfo
 * @returns {Promise}
 */
function register(options: RegisterOptions): PI.HttpAsyncResult<any> {
    return PI.api({
        path: "account/register",
        method: PI.HttpVerb.post,
        params: options
    });
}

/**
 * Unregisters an existing account as a HTTP POST operation.
 * @options loginInfo
 * @returns {Promise}
 */
function unregister(options: LoginOptions): PI.HttpAsyncResult<any> {
    return PI.api({
        path: "account/unregister",
        method: PI.HttpVerb.delete,
        params: options
    });
}