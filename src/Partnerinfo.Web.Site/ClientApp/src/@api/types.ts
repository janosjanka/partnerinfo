// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

export interface ListResult<T> {
    /** The strongly typed list of results to return. */
    data: ArrayLike<T>;
    /** The link to the previous page of this list. */
    prevLink: string;
    /** The link to the next page of this list. */
    nextLink: string;
}