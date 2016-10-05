// Inspired by twitter.com's autocomplete search functionality,
// typeahead.js is a flexible JavaScript library that provides a strong foundation for building robust typeaheads
// https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
//
// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="typeahead.d.ts" />
import * as $ from "jquery";
import * as ko from "knockout";

export default {
    after: ["value"],

    /**
     * This will be called when the binding is first applied to an element.
     * @param element       The DOM element involved in this binding
     * @param valueAccessor A JavaScript function that you can call to get the current model property that is involved in this binding.
     * @param allBindings   A JavaScript object that you can use to access all the model values bound to this DOM element.
     */
    init(element: Element, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor): void {
        const $element = $(element);
        const options = valueAccessor();
        const dataSource = options.dataSource || {};
        const value = allBindings.get("value") || options.value;
        /*
        $element.typeahead({
            highlight: options.highlight !== false,
            hint: options.hint !== false,
            minLength: options.minLength || 1,
            classNames: {
                wrapper: "ui-typeahead",
                input: "ui-typeahead-input",
                hint: "ui-typeahead-hint",
                menu: "ui-typeahead-menu",
                dataset: "ui-typeahead-dataset",
                selectable: "ui-typeahead-selectable",
                suggestion: "ui-typeahead-suggestion",
                empty: "ui-typehead-empty",
                open: "ui-typeahead-open",
                cursor: "ui-typeahead-cursor",
                highlight: "ui-typeahead-highlight"
            }
        }, {
                source: dataSource.source,
                name: dataSource.name,
                async: dataSource.async,
                limit: dataSource.limit,
                display: dataSource.display,
                templates: dataSource.templates
            });
        */
        ko.isWriteableObservable(value) && $element
            .bind("typeahead:change typeahead:select", (/* e, suggestion */) => {
                // Typehead automatically updates the input control so we can use
                // the mapped value (display option) instead of raw object graph (suggestion)
                // to notify Knockout about changes.
                // value(suggestion);
                value($element.val());
            });

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            // This will be called when the element is removed by Knockout or
            // if some other part of your code calls ko.removeNode(element)
            $element.typeahead("destroy");
        });
    },

    /**
     * This will be called once when the binding is first applied to an element and again whenever the associated observable changes value.
     * @param element       The DOM element involved in this binding
     * @param valueAccessor A JavaScript function that you can call to get the current model property that is involved in this binding.
     * @param allBindings   A JavaScript object that you can use to access all the model values bound to this DOM element.
     */
    update(element: Element, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor): void {
        !allBindings.has("value") && $(element).val(ko.unwrap(valueAccessor().value));
    }
};