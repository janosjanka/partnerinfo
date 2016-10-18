// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

declare module PI.Identity {

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
     *
     * @options options
     * @returns {Promise}
     */
    function loginAsync(options: LoginOptions): PromiseLike<any>;

    /**
     * Registers a new account as a HTTP POST operation.
     *
     * @options options
     * @returns {Promise}
     */
    function registerAsync(options: RegisterOptions): PromiseLike<any>;

    /**
     * Unregisters an existing account as a HTTP POST operation.
     *
     * @options options
     * @returns {Promise}
     */
    function unregisterAsync(options: LoginOptions): PromiseLike<any>;

}