// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// https://github.com/knockout/knockout/blob/master/spec/lib/jasmine.extensions.js

export let testNode: Element;

/**
 * The bindings specs make frequent use of this utility function to set up
 * a clean new DOM node they can execute code against.
 */
export function prepareTestNode(): void {
    const existingNode = document.getElementById("testNode");
    if (existingNode != null) {
        existingNode.parentNode.removeChild(existingNode);
    }
    testNode = document.createElement("div");
    testNode.id = "testNode";
    document.body.appendChild(testNode);
}