// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

import "../../extensions";
import colorPicker from "../../../src/components/controls/colorpicker";

describe("Components > Controls > ColorPicker", () => {

    const testComponentName = "ui-colorpicker";

    beforeEach(() => {
        jasmine.prepareTestNode();
        jasmine.clock().install();
        ko.components.register(testComponentName, colorPicker);
    });

    afterEach(() => {
        ko.components.unregister(testComponentName);
        jasmine.clock().uninstall();
    });

    it("throws if the selected value is not white", () => {
        ko.utils.setHtml(jasmine.testNode, `<div data-bind="component: { name: 'ui-colorpicker' }"></div>`);
        ko.applyBindings({ value: "#ffffff" }, jasmine.testNode);
        expect(ko.unwrap(ko.dataFor(jasmine.testNode).value)).toEqual("#ffffff");
    });

    it("throws if the clicked value is not black", () => {
        ko.utils.setHtml(jasmine.testNode, `<div data-bind="component: { name: 'ui-colorpicker' }"></div>`);
        ko.applyBindings({ value: null }, jasmine.testNode);
        jasmine.clock().tick(1);


    });

});