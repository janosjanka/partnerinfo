// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { api, HttpAsyncResponse } from "./core";

export interface LoginOptions {
    email: string;
    password: string;
}

/** Represents user data for creating a new account. */
export interface RegisterOptions {
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
export function loginAsync(options: LoginOptions): HttpAsyncResponse<any> {
    return api({
        path: "account/login",
        method: "post",
        params: options
    });
}

/**
 * Registers a new account as a HTTP POST operation.
 * @options loginInfo
 * @returns {Promise}
 */
export function registerAsync(options: RegisterOptions): HttpAsyncResponse<any> {
    return api({
        path: "account/register",
        method: "post",
        params: options
    });
}

/**
 * Unregisters an existing account as a HTTP POST operation.
 * @options loginInfo
 * @returns {Promise}
 */
export function unregisterAsync(options: LoginOptions): HttpAsyncResponse<any> {
    return api({
        path: "account/unregister",
        method: "delete",
        params: options
    });
}