// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

type RGBColor = KnockoutObservable<string> | string;

interface ColorPickerParams {
    /** An [observable] color value to update. */
    value: RGBColor;
    /** An array of RGB color values. This is an optional field. */
    palette?: ArrayLike<string>;
}

/** A lightweight Color Picker control exposes a variety of color settings. */
class ColorPicker {
    private static s_defaultPalette: ArrayLike<string>;

    value: RGBColor;
    palette: ArrayLike<string>;

    /** Initializes a new instance of the ColorPicker control. */
    constructor(params: ColorPickerParams) {
        this.value = params.value;
        this.palette = params.palette || ColorPicker.defaultPalette;
    }

    /** Raised when the user clicks on the list element. */
    onListClick(viewModel: ColorPicker, event: MouseEvent): boolean | void {
        if (ko.isWriteableObservable(viewModel.value)) {
            // Event bubbling helps us avoid attaching expensive event handlers
            // to each color item. You can simply get the current color using
            // ko.dataFor(...) passing the target (clicked <li>) element into it.
            viewModel.value(ko.dataFor(event.target));
        }
    }

    /** Gets a static instance of the default color palette. */
    static get defaultPalette(): ArrayLike<string> {
        return (ColorPicker.s_defaultPalette = ColorPicker.s_defaultPalette || [
            "#000000",
            "#660000", "#990000", "#cc0000", "#ff0000", "#ff9999",
            "#663300", "#994c00", "#cc6600", "#ff8000", "#ffcc99",
            "#666600", "#999900", "#cccc00", "#ffff00", "#ffff99",
            "#006600", "#009900", "#00cc00", "#00ff00", "#99ff99",
            "#006633", "#0099c4", "#00cc66", "#00ff80", "#99ffcc",
            "#006666", "#009999", "#00cccc", "#00ffff", "#99ffff",
            "#000066", "#000099", "#0000cc", "#0000ff", "#9999ff",
            "#660066", "#990099", "#cc00cc", "#ff00ff", "#ff99ff",
            "#660033", "#99004c", "#cc0066", "#ff007f", "#ff99cc",
            "#606060", "#808080", "#a0a0a0", "#c0c0c0", "#e0e0e0",
            "#ffffff", null
        ]);
    }
}

export default {
    viewModel: ColorPicker,
    template: require("./colorpicker.html")
};