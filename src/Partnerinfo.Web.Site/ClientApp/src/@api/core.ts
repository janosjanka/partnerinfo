/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import { Promise } from "es6-promise";

function noop() { };

const httpRoute = "/api";

/** Represents a HTTP request message. */
export interface HttpRequest {
    /** This is the Partnerinfo API endpoint path that you want to call. */
    path: string;
    /** This is the HTTP method that you want to use for the API request. */
    method?: "get" | "post" | "put" | "delete" | "copy" | "move";
    /** This is an object consisting of any parameters that you want to pass into your API call. */
    params?: any;
}

/** Encapsulates an error from the system. */
export interface HttpError {
    /** Gets the code for this error. */
    code: string;
    /** Gets the description for this error. */
    description: string;
}

/** Represents a HTTP response message. */
export interface HttpResponse<T> {
    data?: T;
    error?: HttpError;
}

/** Represents a HTTP response message as the result of an asynchronous XHR request. */
export type HttpAsyncResponse<T> = PromiseLike<HttpResponse<T>>;

/**
 * The method PI.api() lets you make calls to the API.
 * @param options
 * @returns {Promise}
 */
export function api<T>(options: HttpRequest): HttpAsyncResponse<T> {
    let req: XMLHttpRequest;
    let canceled = false;
    return new Promise<T>(
        (resolve, reject) => {
            req = new XMLHttpRequest();
            req.onreadystatechange = () => {
                if (canceled) {
                    req.onreadystatechange = noop;
                    return;
                }
                if (req.readyState === 4) {
                    if (req.status >= 200 && req.status < 300) {
                        req.responseText ? resolve(JSON.parse(req.responseText)) : resolve();
                    } else {
                        reject({
                            status: req.status
                        });
                    }
                    req.onreadystatechange = noop;
                }
            };
            req.open(options.method || "get", `${httpRoute}/${options.path}`, true);
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            options.params ? req.send(JSON.stringify(options.params)) : req.send();
        })
        // Do not use the "catch" function to chain promises because
        // IE 9 does not allow to use keywords.
        .then<T>(undefined, reason => {
            req.onreadystatechange = noop;
            canceled = true;
            req.abort();
        });
}