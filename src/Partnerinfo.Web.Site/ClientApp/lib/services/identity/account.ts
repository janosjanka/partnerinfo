// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { api } from "../core";

interface LoginOptions {
    email: string;
    password: string;
}

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
 */
export function login(options: LoginOptions): PromiseLike<any> {
    return api({
        path: "account/login",
        method: "post",
        params: options
    });
}

/**
 * Registers a new account as a HTTP POST operation.
 */
export function register(options: RegisterOptions): PromiseLike<any> {
    return api({
        path: "account/register",
        method: "post",
        params: options
    });
}

/**
 * Unregisters an existing account as a HTTP POST operation.
 */
export function unregister(options: LoginOptions): PromiseLike<any> {
    return api({
        path: "account/unregister",
        method: "post",
        params: options
    });
}