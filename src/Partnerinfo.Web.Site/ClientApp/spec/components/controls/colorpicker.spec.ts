// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

import "../../../src/jasmine/extensions";
import colorPicker from "../../../src/components/controls/colorpicker";

describe("Components > Controls > ColorPicker", () => {
    const testComponentName = "ui-colorpicker";

    beforeEach(() => {
        jasmine.prepareTestNode();
        ko.components.register(testComponentName, colorPicker);
    });

    it("sets the value to the background-color of the clicked item", done => {
        const testComponentParams = { value: ko.observable<string>() };
        ko.utils.setHtml(jasmine.testNode, `<div data-bind="component: { name: 'ui-colorpicker', params: $data }"></div>`);

        // Since components are loaded asynchronously, it doesn't show up synchronously.
        ko.applyBindings(testComponentParams, jasmine.testNode);

        // It is used internally for Knockout components to maintain asynchronous behavior,
        // and for scheduling deferred updates for observables.
        // http://knockoutjs.com/documentation/microtasks.html
        ko.tasks.schedule(() => {
            const itemList = jasmine.testNode.querySelectorAll(".ui-colorpicker-item") as NodeListOf<HTMLElement>;
            for (let i = 0; i < itemList.length; ++i) {
                expect(parseInt(itemList[i].style.backgroundColor)).toEqual(parseInt(testComponentParams.value()));
            }
            done();
        });
    });

    afterEach(() => {
        ko.components.unregister(testComponentName);
    });
});