// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { http, HttpAsyncResult } from "../core";

/** Used to log in a user to the system. **/
export interface LoginModel {
    email: string;
    password: string;
}

/** Used to register a new user to the system. */
export interface RegisterModel {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}

/** This class is the entry point for Account Management. */
export class AccountService {

    /** A static instance of the service. This field is read-only. */
    static readonly default: AccountService = new AccountService();

    /** Logs in using an authentication provider as a HTTP POST operation. */
    login(model: LoginModel): HttpAsyncResult<void> {
        return http<void>({
            path: "account/login",
            method: "post",
            params: model
        });
    }

    /** Registers a new account as a HTTP POST operation. */
    register(model: RegisterModel): HttpAsyncResult<void> {
        return http<void>({
            path: "account/register",
            method: "post",
            params: model
        });
    }

    /** Unregisters an existing account as a HTTP POST operation. */
    unregister(model: LoginModel): HttpAsyncResult<void> {
        return http<void>({
            path: "account/unregister",
            method: "post",
            params: model
        });
    }

}