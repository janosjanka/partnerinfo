// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// https://github.com/knockout/knockout/blob/master/spec/lib/jasmine.extensions.js

/// <reference path="extensions.d.ts" />
import * as $ from "jquery";

/**
 * The bindings specs make frequent use of this utility function to set up
 * a clean new DOM node they can execute code against.
 */
jasmine.prepareTestNode = (): void => {
    const existingNode = document.getElementById("testNode");
    if (existingNode != null) {
        existingNode.parentNode.removeChild(existingNode);
    }
    jasmine.testNode = document.createElement("div");
    jasmine.testNode.id = "testNode";
    jasmine.testNodeJQ = $(document.body.appendChild(jasmine.testNode));
}