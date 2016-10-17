// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as core from "./core";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}

/**
 * Logs In using an authentication provider as a HTTP POST operation.
 *
 * @options options
 * @returns {Promise}
 */
export function loginAsync(options: LoginRequest): core.HttpResponse<any> {
    return core.api({
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
export function registerAsync(options: RegisterRequest): core.HttpResponse<any> {
    return core.api({
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
export function unregisterAsync(options: LoginRequest): core.HttpResponse<any> {
    return core.api({
        path: "account/unregister",
        method: "post",
        params: options
    });
}