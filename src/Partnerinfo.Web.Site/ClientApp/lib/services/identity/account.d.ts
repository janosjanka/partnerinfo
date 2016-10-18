// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** Used to log in a user to the system. **/
interface LoginOptions {
    email: string;
    password: string;
}

/** Used to register a new user to the system. */
interface RegisterOptions {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    birthday?: Date;
}