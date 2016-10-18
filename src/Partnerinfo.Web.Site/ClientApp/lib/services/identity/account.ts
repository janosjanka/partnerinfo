// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { api } from "../core";

/** Used to log in a user to the system. **/
export interface LoginOptions {
    email: string;
    password: string;
}

/** Used to register a new user to the system. */
export interface RegisterOptions {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}

export class AccountService {

    /** Logs In using an authentication provider as a HTTP POST operation. */
    login(options: LoginOptions): PromiseLike<any> {
        return api({
            path: "account/login",
            method: "post",
            params: options
        });
    }

    /** Registers a new account as a HTTP POST operation. */
    register(options: RegisterOptions): PromiseLike<any> {
        return api({
            path: "account/register",
            method: "post",
            params: options
        });
    }

    /** Unregisters an existing account as a HTTP POST operation. */
    unregister(options: LoginOptions): PromiseLike<any> {
        return api({
            path: "account/unregister",
            method: "post",
            params: options
        });
    }

}