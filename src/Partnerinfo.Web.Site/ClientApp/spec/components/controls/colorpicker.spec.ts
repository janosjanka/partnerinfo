// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as $ from "jquery";
import * as ko from "knockout";

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

    it("throws if the selected value is not white (#ffffff)", () => {
        ko.utils.setHtml(jasmine.testNode, `<div data-bind="component: { name: 'ui-colorpicker', params: { value: '#ffffff' } }"></div>`);
    });

});