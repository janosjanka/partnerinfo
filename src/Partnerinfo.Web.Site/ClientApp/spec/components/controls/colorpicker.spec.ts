// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";
import "@pi/utilities/jasmine";
import * as color from "@pi/utilities/color";
import colorPicker from "@pi/components/controls/colorpicker";

const testComponentName = "colorpicker";

describe(`components > controls > ${testComponentName}`, () => {
    beforeAll(() => {
        ko.components.register(testComponentName, colorPicker);
    });

    beforeEach(() => {
        jasmine.prepareTestNode();
        jasmine.testNode.innerHTML = `<div data-bind="component: { name: '${testComponentName}', params: $data }"></div>`;
    });

    it("should be initialized with an observable value '#ffffff'", done => {
        const testComponentParams = { value: ko.observable<string>("#ffffff") };

        // Since components are loaded asynchronously, it doesn't show up synchronously.
        ko.applyBindings(testComponentParams, jasmine.testNode);

        // It is used internally for components to maintain asynchronous behavior.
        ko.tasks.schedule(() => {
            const viewModel = ko.dataFor(jasmine.testNode);
            expect(viewModel).toBeDefined();
            expect(viewModel).not.toBeNull();
            expect(ko.unwrap(viewModel.value)).toBe("#ffffff");
            done();
        });
    });

    it("sets the value to the background-color of the clicked item", done => {
        const testComponentParams = { value: ko.observable<string>() };

        // Since components are loaded asynchronously, it doesn't show up synchronously.
        ko.applyBindings(testComponentParams, jasmine.testNode);

        // It is used internally for components to maintain asynchronous behavior.
        ko.tasks.schedule(() => {
            const itemList = jasmine.testNode.querySelectorAll(".ui-colorpicker-item") as NodeListOf<HTMLElement>;
            for (let i = 0; i < itemList.length; ++i) {
                const item = itemList[i];
                ko.utils.triggerEvent(item, "click");
                expect(color.rgbToHex(item.style.backgroundColor)).toBe(ko.unwrap(testComponentParams.value));
            }
            done();
        });
    });

    afterAll(() => {
        ko.components.unregister(testComponentName);
    });
});