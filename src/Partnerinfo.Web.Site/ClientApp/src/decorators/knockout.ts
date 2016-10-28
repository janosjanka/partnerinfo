// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

/** Generates a field key for the specified property key. */
function getFieldKey(propertyKey: string): string { return "__" + propertyKey; }

/** Property decorator that creates hidden ko.observable with ES6 getter and setter for it. */
export function observable(value?: any): PropertyDecorator {
    return (target: any, propertyKey: string): void => {
        const observable = ko.observable(value);
        target[getFieldKey(propertyKey)] = observable;
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: observable,
            set: observable
        });
    }
}