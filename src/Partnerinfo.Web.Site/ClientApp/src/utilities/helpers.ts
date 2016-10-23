// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/**
 * Returns a new function that will execute only once, coalescing multiple sequential calls into a single execution.
 *
 * @param callback  A callback you want to execute after delay milliseconds.
 * @param delay     The number of milliseconds (thousandths of a second) that the function call should be delayed by.
 * @param immediate If true, trigger the function on the leading edge, instead of the trailing.
 */
export function debounce(callback: Function, delay: number = 0, immediate: boolean = false): Function {
    let timeout: number;
    return function () {
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) {
                callback.apply(this, args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = window.setTimeout(later, delay);
        if (callNow) {
            callback.apply(this, args);
        }
    };
}