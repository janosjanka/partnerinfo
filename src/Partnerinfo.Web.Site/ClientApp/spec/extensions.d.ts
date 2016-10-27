// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// https://github.com/knockout/knockout/blob/master/spec/lib/jasmine.extensions.js

declare namespace jasmine {

    /** A HTML DOM element that can be used for your tests. */
    let testNode: Element;

    /**
     * The bindings specs make frequent use of this utility function to set up
     * a clean new DOM node they can execute code against.
     */
    function prepareTestNode(): void;

}