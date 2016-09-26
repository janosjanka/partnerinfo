/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import { api, ApiPromiseLike } from "./core";

/** Represents user data for . */
export interface LoginParams {
    email: string;
    password: string;
}

/** Represents user data for creating a new account. */
export interface RegisterParams {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}

/**
 * Logs In using an authentication provider as a HTTP POST operation.
 * @param loginInfo
 * @returns {Promise}
 */
export function login(params: LoginParams): ApiPromiseLike<any> {
    return api({
        path: "account/login",
        method: "post",
        params: params
    });
}

/**
 * Registers a new account as a HTTP POST operation.
 * @param loginInfo
 * @returns {Promise}
 */
export function register(params: RegisterParams): ApiPromiseLike<any> {
    return api({
        path: "account/register",
        method: "post",
        params: params
    });
}

/**
 * Unregisters an existing account as a HTTP POST operation.
 * @param loginInfo
 * @returns {Promise}
 */
export function unregister(params: LoginParams): ApiPromiseLike<any> {
    return api({
        path: "account/unregister",
        method: "post",
        params: params
    });
}