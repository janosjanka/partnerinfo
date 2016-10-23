/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var i18next = __webpack_require__(2);
	var i18nextBLD = __webpack_require__(4);
	var i18nextXHR = __webpack_require__(5);
	var ko = __webpack_require__(6);
	var koValidation = __webpack_require__(7);
	var app_1 = __webpack_require__(8);
	// Using deferred updates ensures that computed observables and bindings are updated only after their dependencies are stable.
	// Even if an observable might go through multiple intermediate values, only the latest value is used to update its dependencies.
	// http://knockoutjs.com/documentation/deferred-updates.html
	ko.options.deferUpdates = true;
	// Initialize Knockout validation before binding data.
	// https://github.com/Knockout-Contrib/Knockout-Validation/wiki/Configuration
	koValidation.init({
	    registerExtenders: true,
	    errorClass: "validation-summary-errors",
	    errorElementClass: "input-validation-error",
	    errorMessageClass: "validation-summary-errors",
	    decorateInputElement: true,
	    messageTemplate: undefined,
	    messagesOnModified: true,
	    insertMessages: true,
	    parseInputAttributes: false
	});
	// Load and register the <pi-app> component.
	ko.components.register("pi-app", app_1.default);
	// Initialize i18next localization services with
	// browser culture detection and XHR json loader.
	i18next
	    .use(i18nextBLD)
	    .use(i18nextXHR)
	    .init({
	    backend: {
	        addPath: "strings/{{lng}}/{{ns}}.json",
	        loadPath: "strings/{{lng}}/{{ns}}.json"
	    },
	    debug: false,
	    detection: {
	        order: ["cookie"],
	        caches: ["cookie"],
	        lookupCookie: "PI-CLR"
	    },
	    fallbackLng: "en-GB",
	    load: "currentOnly",
	    ns: ["shared"]
	}, function (error, t) {
	    // Tell Knockout to start up an instance of the application after
	    // loading the specified language resources.
	    // TODO: Shared resources should be rendered at startup.
	    ko.applyBindings();
	});
	if (false) {
	    module.hot.accept();
	    module.hot.dispose(function () {
	        ko.cleanNode(document.body);
	        ko.i18n.language = undefined;
	    });
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(47);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = corefx_2f54336e19150c9d3961;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(32);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(36);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(7);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(50);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	__webpack_require__(9);
	var app_1 = __webpack_require__(24);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = app_1.default;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	/// <reference path="base.d.ts" />
	var ko = __webpack_require__(6);
	__webpack_require__(10);
	var typeahead_1 = __webpack_require__(11);
	var webpack_loader_1 = __webpack_require__(13);
	var colorpicker_1 = __webpack_require__(14);
	var countdown_1 = __webpack_require__(16);
	var cultures_1 = __webpack_require__(18);
	var timespan_1 = __webpack_require__(20);
	var validationerrors_1 = __webpack_require__(22);
	//
	// Register KO loaders.
	//
	ko.components.loaders.unshift(webpack_loader_1.default);
	//
	// Register KO extenders.
	//
	ko.bindingHandlers.typeahead = typeahead_1.default;
	//
	// Register KO components.
	//   ui- => Standard UI components
	//   pi- => Application components
	//
	ko.components.register("ui-colorpicker", colorpicker_1.default);
	ko.components.register("ui-countdown", countdown_1.default);
	ko.components.register("ui-cultures", cultures_1.default);
	ko.components.register("ui-timespan", timespan_1.default);
	ko.components.register("ui-validationerrors", validationerrors_1.default);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	/// <reference path="i18n.d.ts" />
	var ko = __webpack_require__(6);
	var i18next = __webpack_require__(2);
	var language = ko.observable();
	ko.i18n = {
	    get language() {
	        return language();
	    },
	    set language(value) {
	        i18next.changeLanguage(value, function (err) { return !err && language(value); });
	    },
	    get languages() {
	        return i18next.languages;
	    },
	    t: function (key, options) {
	        return ko.pureComputed(function () { return language() ? i18next.t(key, options) : ""; });
	    }
	};
	ko.extenders.i18nOptions = function (target, i18nOptions) {
	    target.i18nOptions = i18nOptions;
	    return target;
	};
	ko.extenders.displayName = function (target, displayName) {
	    target.displayName = ko.i18n.t(displayName, target.i18nOptions);
	    return target;
	};
	ko.extenders.description = function (target, description) {
	    target.description = ko.i18n.t(description, target.i18nOptions);
	    return target;
	};
	// This will notify all localizable dependencies about changes. 
	i18next.on("languageChanged", function (lng) { return language(lng); });


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Inspired by twitter.com's autocomplete search functionality,
	// typeahead.js is a flexible JavaScript library that provides a strong foundation for building robust typeaheads
	// https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
	//
	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	/// <reference path="typeahead.d.ts" />
	var $ = __webpack_require__(12);
	var ko = __webpack_require__(6);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    /** An array of binding names must be applied to an element before it. */
	    after: ["value"],
	    /** This will be called when the binding is first applied to an element. */
	    init: function (element, valueAccessor, allBindings) {
	        var $element = $(element);
	        var options = valueAccessor();
	        var dataSource = options.dataSource || {};
	        var value = allBindings.get("value") || options.value;
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
	            .bind("typeahead:change typeahead:select", function () {
	            // Typehead automatically updates the input element so we can use
	            // the mapped value (display option) instead of the raw object graph (suggestion)
	            // to notify KO about these changes.
	            value($element.val());
	        });
	        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
	            // This will be called when the element is removed by Knockout or
	            // if some other part of your code calls ko.removeNode(element)
	            $element.typeahead("destroy");
	        });
	    },
	    /** This will be called once when the binding is first applied to an element and again whenever the associated observable changes value. */
	    update: function (element, valueAccessor, allBindings) {
	        !allBindings.has("value") && $(element).val(ko.unwrap(valueAccessor().value));
	    }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(1);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) J�nos Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    // This Knockout component loader integrates with Webpack's lazy-loaded bundle feature.
	    // ko.components.register("component", require("bundle?lazy!../some-path-to-a-js-or-ts-module"));
	    // and then it will be loaded on demand instead of being loaded up front.
	    loadComponent: function (name, componentConfig, callback) {
	        if (typeof componentConfig === "function") {
	            componentConfig(function (loadedModule) {
	                if (loadedModule.__esModule && loadedModule.default) {
	                    loadedModule = loadedModule.default;
	                }
	                ko.components.defaultLoader.loadComponent(name, loadedModule, callback);
	            });
	        }
	        else {
	            callback(null);
	        }
	    }
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	/** A lightweight Color Picker control exposes a variety of color settings. */
	var ColorPicker = (function () {
	    /** Initializes a new instance of the ColorPicker control. */
	    function ColorPicker(params) {
	        this.value = params.value;
	        this.palette = params.palette || ColorPicker.defaultPalette;
	    }
	    /** Raised when the user clicks on the list element. */
	    ColorPicker.prototype.onListClick = function (viewModel, event) {
	        if (ko.isWriteableObservable(viewModel.value)) {
	            // Event bubbling helps us to avoid attaching expensive event handlers
	            // to each color item. You can simply get the current color using
	            // ko.dataFor(...) passing the target (clicked <li>) element into it.
	            viewModel.value(ko.dataFor(event.target));
	        }
	    };
	    Object.defineProperty(ColorPicker, "defaultPalette", {
	        /** Gets a static instance of the default color palette. */
	        get: function () {
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
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ColorPicker;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: ColorPicker,
	    template: __webpack_require__(15)
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"ui-colorpicker\" data-bind=\"foreach: palette, click: onListClick\">\r\n    <li data-bind=\"css: { selected: $data === $parent.value(), notset: $data === null }, style: { backgroundColor: $data }\"></li>\r\n</ul>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) J�nos Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	var Countdown = (function () {
	    /**
	     * Initializes a new instance of the Countdown class.
	     *
	     * @param {any} A set of key/value pairs to configure the TimeSpan control
	     */
	    function Countdown(params) {
	        this._valueInTicks = ko.unwrap(params.value).getTime();
	        this._complete = params.complete;
	        this.days = ko.observable(0);
	        this.hours = ko.observable(0);
	        this.minutes = ko.observable(0);
	        this.seconds = ko.observable(0);
	        this.countdown();
	    }
	    Countdown.prototype.countdown = function () {
	        var _this = this;
	        var amount = this._valueInTicks - Date.now();
	        if (amount < 0) {
	            this._complete();
	            return;
	        }
	        var days = 0, hours = 0, mins = 0, secs = 0;
	        amount = Math.floor(amount / 1000);
	        days = Math.floor(amount / 86400);
	        amount = amount % 86400;
	        hours = Math.floor(amount / 3600);
	        amount = amount % 3600;
	        mins = Math.floor(amount / 60);
	        amount = amount % 60;
	        secs = Math.floor(amount);
	        this.days(days);
	        this.hours(hours);
	        this.minutes(mins);
	        this.seconds(secs);
	        var timeoutId = setTimeout(function () {
	            clearTimeout(timeoutId);
	            _this.countdown();
	        }, 1000);
	    };
	    return Countdown;
	}());
	exports.Countdown = Countdown;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: Countdown,
	    template: __webpack_require__(17)
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-countdown\">\r\n    <span data-bind=\"text: days\"></span> day(s)\r\n    <span data-bind=\"text: hours\"></span>:<span data-bind=\"text: minutes\"></span>:<span data-bind=\"text: seconds\"></span>\r\n</div>"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	var CultureInfo = (function () {
	    function CultureInfo(language, displayName) {
	        var _this = this;
	        this.language = language;
	        this.displayName = displayName;
	        this.isActive = ko.pureComputed(function () { return _this.language === ko.i18n.language; }, this);
	    }
	    CultureInfo.prototype.dispose = function () {
	        this.isActive.dispose();
	    };
	    return CultureInfo;
	}());
	var CultureListViewModel = (function () {
	    function CultureListViewModel() {
	        this.languages = [
	            new CultureInfo("en-GB", "English (GB)"),
	            new CultureInfo("hu-HU", "Hungarian")
	        ];
	    }
	    CultureListViewModel.prototype.changeLanguage = function (info) {
	        ko.i18n.language = info.language;
	    };
	    CultureListViewModel.prototype.dispose = function () {
	        this.languages.forEach(function (info) { return info.dispose(); });
	    };
	    return CultureListViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: CultureListViewModel,
	    template: __webpack_require__(19)
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<!-- ko foreach: { data: languages, as: 'languageInfo' } -->\r\n<li data-bind=\"css: { active: languageInfo.isActive }\">\r\n    <a href=\"#\" data-bind=\"text: languageInfo.displayName, click: $parent.changeLanguage, clickBubble: false\"></a>\r\n</li>\r\n<!-- /ko -->\r\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	function asNumber(n) {
	    return n === undefined ? 0 : +n;
	}
	var TimeSpan = (function () {
	    /**
	     * Initializes a new instance of the TimeSpan class.
	     *
	     * @param params A set of key/value pairs to configure the TimeSpan control.
	     */
	    function TimeSpan(params) {
	        this._disposed = false;
	        this._listening = true;
	        this.days = ko.observable()
	            .extend({
	            displayName: "controls:timespan.days",
	            min: 0
	        });
	        this.hours = ko.observable()
	            .extend({
	            displayName: "controls:timespan.hours",
	            min: 0,
	            max: 23
	        });
	        this.minutes = ko.observable()
	            .extend({
	            displayName: "controls:timespan.minutes",
	            min: 0,
	            max: 59
	        });
	        this.seconds = ko.observable()
	            .extend({
	            displayName: "controls:timespan.seconds",
	            min: 0,
	            max: 59
	        });
	        this.value = params.value;
	        this.loadFromString(ko.unwrap(this.value));
	        this._d = this.days.subscribe(this.timeChanged, this);
	        this._h = this.hours.subscribe(this.timeChanged, this);
	        this._m = this.minutes.subscribe(this.timeChanged, this);
	        this._s = this.seconds.subscribe(this.timeChanged, this);
	    }
	    /** Raised immediately after one of the time values has changed. */
	    TimeSpan.prototype.timeChanged = function () {
	        if (!this._listening) {
	            return;
	        }
	        this._listening = false;
	        var _a = this.getValues(), days = _a[0], hours = _a[1], minutes = _a[2], seconds = _a[3];
	        var rem = seconds % 60;
	        minutes += (seconds - rem) / 60;
	        seconds = rem;
	        rem = minutes % 60;
	        hours += (minutes - rem) / 60;
	        minutes = rem;
	        rem = hours % 24;
	        days += (hours - rem) / 24;
	        hours = rem;
	        this.setValues(days, hours, minutes, seconds);
	        this.value(this.toString());
	        this._listening = true;
	    };
	    /**
	     * Loads time values from the specified string.
	     *
	     * @param value A string that contains time values.
	     */
	    TimeSpan.prototype.loadFromString = function (value) {
	        var slots = value ? value.split(":", 4) : [];
	        this.setValues(asNumber(slots[0]), asNumber(slots[1]), asNumber(slots[2]), asNumber(slots[3]));
	    };
	    /** Gets all the time components using a tuple { days, hours, minutes, seconds }. */
	    TimeSpan.prototype.getValues = function () {
	        return [this.days(), this.hours(), this.minutes(), this.seconds()];
	    };
	    /**
	     * Sets all the time components using the specified values.
	     *
	     * @param days     The days component of the time interval.
	     * @param hours    The hours component of the time interval.
	     * @param minutes  The minutes component of the time interval.
	     * @param seconds  The seconds component of the time interval.
	     */
	    TimeSpan.prototype.setValues = function (days, hours, minutes, seconds) {
	        this.days(days);
	        this.hours(hours);
	        this.minutes(minutes);
	        this.seconds(seconds);
	    };
	    /** Converts this time span to string. */
	    TimeSpan.prototype.toString = function () {
	        var _a = this.getValues(), days = _a[0], hours = _a[1], minutes = _a[2], seconds = _a[3];
	        return days + ":" + hours + ":" + minutes + ":" + seconds;
	    };
	    /** Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. */
	    TimeSpan.prototype.dispose = function () {
	        if (this._disposed) {
	            return;
	        }
	        this._d && this._d.dispose(), this._d = null;
	        this._h && this._h.dispose(), this._h = null;
	        this._m && this._m.dispose(), this._m = null;
	        this._s && this._s.dispose(), this._s = null;
	        this._disposed = true;
	    };
	    return TimeSpan;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: TimeSpan,
	    template: __webpack_require__(21)
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-timespan\">\r\n    <label data-bind=\"text: days.displayName\"></label>\r\n    <input type=\"number\" name=\"days\" data-bind=\"value: days\" />\r\n    <label data-bind=\"text: hours.displayName\"></label>\r\n    <input type=\"number\" name=\"hours\" data-bind=\"value: hours\" />\r\n    <label data-bind=\"text: minutes.displayName\"></label>\r\n    <input type=\"number\" name=\"minutes\" data-bind=\"value: minutes\" />\r\n    <label data-bind=\"text: seconds.displayName\"></label>\r\n    <input type=\"number\" name=\"seconds\" data-bind=\"value: seconds\" />\r\n</div>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ValidationErrors = (function () {
	    /** Initializes a new instance of the ValidationErrors control. */
	    function ValidationErrors(params) {
	        this.errors = params.errors;
	    }
	    return ValidationErrors;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: ValidationErrors,
	    template: __webpack_require__(23)
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui-validation-errors\" data-bind=\"visible: errors().length\">\r\n    <ul data-bind=\"foreach: errors\">\r\n        <li data-bind=\"text: $data\"></li>\r\n    </ul>\r\n</div>"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	__webpack_require__(25);
	var ko = __webpack_require__(6);
	__webpack_require__(26);
	var navbar_1 = __webpack_require__(27);
	var footer_1 = __webpack_require__(29);
	var login_1 = __webpack_require__(31);
	var register_1 = __webpack_require__(36);
	var AppViewModel = (function () {
	    function AppViewModel() {
	        this.routes = {
	            "/": "pi-home",
	            "/about": "pi-about"
	        };
	        // Load and register all the KO components needed to handle the routes.
	        // The optional 'bundle?lazy!' prefix is a Webpack feature that causes the referenced modules
	        // to be split into separate files that are then loaded on demand.
	        // For docs, see https://github.com/webpack/bundle-loader.
	        ko.components.register("pi-navbar", navbar_1.default);
	        ko.components.register("pi-footer", footer_1.default);
	        ko.components.register("pi-home", __webpack_require__(38));
	        ko.components.register("pi-about", __webpack_require__(41));
	        ko.components.register("pi-identity-login", login_1.default);
	        ko.components.register("pi-identity-register", register_1.default);
	    }
	    AppViewModel.prototype.dispose = function () {
	        // To support hot module replacement, this method unregisters the router and KO components.
	        // In production scenarios where hot module replacement is disabled, this would not be invoked.
	        Object.getOwnPropertyNames(ko.components._allRegisteredComponents)
	            .forEach(function (componentName) {
	            if (componentName.indexOf("pi-") === 0) {
	                ko.components.unregister(componentName);
	            }
	        });
	    };
	    return AppViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: AppViewModel,
	    template: __webpack_require__(44)
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(10);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(51);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var NavBarViewModel = (function () {
	    function NavBarViewModel() {
	    }
	    return NavBarViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: NavBarViewModel,
	    template: __webpack_require__(28)
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-main navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-navbar-collapse\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" rel=\"nofollow\" href=\"/\">Partnerinfo</a>\r\n        </div>\r\n        <div id=\"main-navbar-collapse\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a data-bind=\"path: '/about'\">About</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n                        <span data-bind=\"text: ko.i18n.language\"></span>\r\n                        <b class=\"caret\"></b>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\" data-bind=\"component: { name: 'ui-cultures' }\"></ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n                        Log In\r\n                        <b class=\"caret\"></b>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"col-md-12\" style=\"width: 300px;\" data-bind=\"component: { name: 'pi-identity-login' }\"></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a rel=\"nofollow\" href=\"https://www.facebook.com\" target=\"_blank\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 216 216\" style=\"width: 16px; height: 16px;\">\r\n                            <path fill=\"#000\" d=\"M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9 11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1 11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2 15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3 11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z\"></path>\r\n                        </svg>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var FooterViewModel = (function () {
	    function FooterViewModel() {
	    }
	    return FooterViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: FooterViewModel,
	    template: __webpack_require__(30)
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"theme-darker\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n                <ul class=\"list-inline\" data-bind=\"component: { name: 'ui-cultures' }\"></ul>\r\n            </div>\r\n            <div class=\"col-xs-6 text-right\">\r\n                &copy; Partnerinfo - All rights reserved.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var ko = __webpack_require__(6);
	var koValidation = __webpack_require__(7);
	var account_1 = __webpack_require__(32);
	/** Used to log in a user to the system. */
	var LoginViewModel = (function () {
	    /** Initializes a new instance of the class. */
	    function LoginViewModel(params) {
	        if (params === void 0) { params = {}; }
	        this.service = params.service || account_1.AccountService.default;
	        this.email = ko.observable(params.options && params.options.email)
	            .extend({
	            displayName: "shared:account.login.email",
	            description: "shared:account.login.emailDescription",
	            required: {
	                message: "{0}",
	                params: ko.i18n.t("shared:account.login.emailRequired")
	            }
	        });
	        this.password = ko.observable(params.options && params.options.password)
	            .extend({
	            displayName: "shared:account.login.password",
	            description: "shared:account.login.passwordDescription",
	            required: {
	                message: "{0}",
	                params: ko.i18n.t("shared:account.login.passwordRequired")
	            }
	        });
	        this.validationErrors = koValidation.group([this.email, this.password]);
	    }
	    /** Submits login data. */
	    LoginViewModel.prototype.submit = function () {
	        this.validate() && this.service.login(this.toObject());
	    };
	    Object.defineProperty(LoginViewModel.prototype, "isValid", {
	        /** Gets a value indicating whether this object is valid. */
	        get: function () {
	            return this.validationErrors().length === 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Validates this object and returns true if that is valid. */
	    LoginViewModel.prototype.validate = function () {
	        this.validationErrors.showAllMessages();
	        return this.isValid;
	    };
	    /** Serializes this object to a native JS object. */
	    LoginViewModel.prototype.toObject = function () {
	        return {
	            email: this.email(),
	            password: this.password()
	        };
	    };
	    return LoginViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: LoginViewModel,
	    template: __webpack_require__(35)
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var core_1 = __webpack_require__(33);
	/** This class is the entry point for Account Management. */
	var AccountService = (function () {
	    function AccountService() {
	    }
	    /** Logs in using an authentication provider as a HTTP POST operation. */
	    AccountService.prototype.login = function (model) {
	        return core_1.http({
	            path: "account/login",
	            method: "post",
	            params: model
	        });
	    };
	    /** Registers a new account as a HTTP POST operation. */
	    AccountService.prototype.register = function (model) {
	        return core_1.http({
	            path: "account/register",
	            method: "post",
	            params: model
	        });
	    };
	    /** Unregisters an existing account as a HTTP POST operation. */
	    AccountService.prototype.unregister = function (model) {
	        return core_1.http({
	            path: "account/unregister",
	            method: "post",
	            params: model
	        });
	    };
	    /** A static instance of the service. This field is read-only. */
	    AccountService.default = new AccountService();
	    return AccountService;
	}());
	exports.AccountService = AccountService;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var es6_promise_1 = __webpack_require__(34);
	function noop() { }
	;
	var httpRoute = "/api";
	/**
	 * The method PI.api() lets you make calls to the API.
	 *
	 * @param options A set of key/value pairs that configure a new HTTP request.
	 */
	function http(options) {
	    var req;
	    var canceled = false;
	    return new es6_promise_1.Promise(function (resolve, reject) {
	        req = new XMLHttpRequest();
	        req.onreadystatechange = function () {
	            if (canceled) {
	                req.onreadystatechange = noop;
	                return;
	            }
	            if (req.readyState === 4) {
	                if (req.status >= 200 && req.status < 300) {
	                    req.responseText ? resolve(JSON.parse(req.responseText)) : resolve();
	                }
	                else {
	                    reject({
	                        status: req.status
	                    });
	                }
	                req.onreadystatechange = noop;
	            }
	        };
	        req.open(options.method || "get", httpRoute + "/" + options.path, true);
	        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	        options.params ? req.send(JSON.stringify(options.params)) : req.send();
	    })
	        .then(undefined, function (reason) {
	        req.onreadystatechange = noop;
	        canceled = true;
	        req.abort();
	    });
	}
	exports.http = http;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(23);

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<form class=\"form-horizontal\" data-bind=\"submit: submit\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"login-email\" data-bind=\"text: email.displayName\"></label>\r\n        <div class=\"col-md-8\">\r\n            <input class=\"form-control\" id=\"login-email\" type=\"email\" name=\"email\" data-bind=\"value: email, attr: { placeholder: email.placeholder }\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"login-password\" data-bind=\"text: password.displayName\"></label>\r\n        <div class=\"col-md-8\">\r\n            <input class=\"form-control\" id=\"login-password\" type=\"password\" name=\"password\" data-bind=\"value: password, attr: { placeholder: password.placeholder }\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n</form>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) János Janka. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
	"use strict";
	var RegisterViewModel = (function () {
	    function RegisterViewModel() {
	    }
	    return RegisterViewModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    viewModel: RegisterViewModel,
	    template: __webpack_require__(37)
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(1, function(require) {
			cb(__webpack_require__(39));
		});
	}

/***/ },
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(2, function(require) {
			cb(__webpack_require__(42));
		});
	}

/***/ },
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	module.exports = "<!-- ko component: { name: 'pi-navbar' } --><!-- /ko -->\r\n<main data-bind=\"component: { name: 'ko-component-router', params: { routes: routes, hashbang: false } }\"></main>\r\n<!-- ko component: { name: 'pi-footer' } --><!-- /ko -->"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3dlYnBhY2svYm9vdHN0cmFwIGJiYzVkMjdmMzcyNzY5ZjhmMjdiIiwiLi4vLi4vLi9DbGllbnRBcHAvbWFpbi50cyIsIi4uLy4uL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pMThuZXh0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjEiLCIuLi8uLi9leHRlcm5hbCBcImNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MVwiIiwiLi4vLi4vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjEiLCIuLi8uLi9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaTE4bmV4dC14aHItYmFja2VuZC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxIiwiLi4vLi4vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MSIsIi4uLy4uL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9rbm9ja291dC52YWxpZGF0aW9uL2Rpc3Qva25vY2tvdXQudmFsaWRhdGlvbi5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2FwcC50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9iYXNlLnRzIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2V4dGVuZGVycy9pMThuLnRzIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2JpbmRpbmdIYW5kbGVycy90eXBlYWhlYWQudHMiLCIuLi8uLi9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjEiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy93ZWJwYWNrLWxvYWRlci50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2NvbG9ycGlja2VyLnRzIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvY29sb3JwaWNrZXIuaHRtbCIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2NvdW50ZG93bi50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2NvdW50ZG93bi5odG1sIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvY3VsdHVyZXMudHMiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9jb250cm9scy9jdWx0dXJlcy5odG1sIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdGltZXNwYW4udHMiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9jb250cm9scy90aW1lc3Bhbi5odG1sIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdmFsaWRhdGlvbmVycm9ycy50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL3ZhbGlkYXRpb25lcnJvcnMuaHRtbCIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIi4uLy4uL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MSIsIi4uLy4uL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9rby1jb21wb25lbnQtcm91dGVyL2Rpc3Qva28tY29tcG9uZW50LXJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIuaHRtbCIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIudHMiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyLmh0bWwiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9pZGVudGl0eS9sb2dpbi50cyIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9zZXJ2aWNlcy9pZGVudGl0eS9hY2NvdW50LnRzIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL3NlcnZpY2VzL2NvcmUudHMiLCIuLi8uLi9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvaWRlbnRpdHkvbG9naW4uaHRtbCIsIi4uLy4uLy4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2lkZW50aXR5L3JlZ2lzdGVyLnRzIiwiLi4vLi4vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvaWRlbnRpdHkvcmVnaXN0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL2hvbWUudHM/M2EwZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL2Fib3V0LnRzPzlmNzIiLCIuLi8uLi8uL0NsaWVudEFwcC9zcmMvY29t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WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJiYzVkMjdmMzcyNzY5ZjhmMjdiXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGkxOG5leHQgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTtcclxudmFyIGkxOG5leHRCTEQgPSByZXF1aXJlKFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIik7XHJcbnZhciBpMThuZXh0WEhSID0gcmVxdWlyZShcImkxOG5leHQteGhyLWJhY2tlbmRcIik7XHJcbnZhciBrbyA9IHJlcXVpcmUoXCJrbm9ja291dFwiKTtcclxudmFyIGtvVmFsaWRhdGlvbiA9IHJlcXVpcmUoXCJrbm9ja291dC52YWxpZGF0aW9uXCIpO1xyXG52YXIgYXBwXzEgPSByZXF1aXJlKFwiLi9zcmMvYXBwXCIpO1xyXG4vLyBVc2luZyBkZWZlcnJlZCB1cGRhdGVzIGVuc3VyZXMgdGhhdCBjb21wdXRlZCBvYnNlcnZhYmxlcyBhbmQgYmluZGluZ3MgYXJlIHVwZGF0ZWQgb25seSBhZnRlciB0aGVpciBkZXBlbmRlbmNpZXMgYXJlIHN0YWJsZS5cclxuLy8gRXZlbiBpZiBhbiBvYnNlcnZhYmxlIG1pZ2h0IGdvIHRocm91Z2ggbXVsdGlwbGUgaW50ZXJtZWRpYXRlIHZhbHVlcywgb25seSB0aGUgbGF0ZXN0IHZhbHVlIGlzIHVzZWQgdG8gdXBkYXRlIGl0cyBkZXBlbmRlbmNpZXMuXHJcbi8vIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9kb2N1bWVudGF0aW9uL2RlZmVycmVkLXVwZGF0ZXMuaHRtbFxyXG5rby5vcHRpb25zLmRlZmVyVXBkYXRlcyA9IHRydWU7XHJcbi8vIEluaXRpYWxpemUgS25vY2tvdXQgdmFsaWRhdGlvbiBiZWZvcmUgYmluZGluZyBkYXRhLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vS25vY2tvdXQtQ29udHJpYi9Lbm9ja291dC1WYWxpZGF0aW9uL3dpa2kvQ29uZmlndXJhdGlvblxyXG5rb1ZhbGlkYXRpb24uaW5pdCh7XHJcbiAgICByZWdpc3RlckV4dGVuZGVyczogdHJ1ZSxcclxuICAgIGVycm9yQ2xhc3M6IFwidmFsaWRhdGlvbi1zdW1tYXJ5LWVycm9yc1wiLFxyXG4gICAgZXJyb3JFbGVtZW50Q2xhc3M6IFwiaW5wdXQtdmFsaWRhdGlvbi1lcnJvclwiLFxyXG4gICAgZXJyb3JNZXNzYWdlQ2xhc3M6IFwidmFsaWRhdGlvbi1zdW1tYXJ5LWVycm9yc1wiLFxyXG4gICAgZGVjb3JhdGVJbnB1dEVsZW1lbnQ6IHRydWUsXHJcbiAgICBtZXNzYWdlVGVtcGxhdGU6IHVuZGVmaW5lZCxcclxuICAgIG1lc3NhZ2VzT25Nb2RpZmllZDogdHJ1ZSxcclxuICAgIGluc2VydE1lc3NhZ2VzOiB0cnVlLFxyXG4gICAgcGFyc2VJbnB1dEF0dHJpYnV0ZXM6IGZhbHNlXHJcbn0pO1xyXG4vLyBMb2FkIGFuZCByZWdpc3RlciB0aGUgPHBpLWFwcD4gY29tcG9uZW50LlxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGktYXBwXCIsIGFwcF8xLmRlZmF1bHQpO1xyXG4vLyBJbml0aWFsaXplIGkxOG5leHQgbG9jYWxpemF0aW9uIHNlcnZpY2VzIHdpdGhcclxuLy8gYnJvd3NlciBjdWx0dXJlIGRldGVjdGlvbiBhbmQgWEhSIGpzb24gbG9hZGVyLlxyXG5pMThuZXh0XHJcbiAgICAudXNlKGkxOG5leHRCTEQpXHJcbiAgICAudXNlKGkxOG5leHRYSFIpXHJcbiAgICAuaW5pdCh7XHJcbiAgICBiYWNrZW5kOiB7XHJcbiAgICAgICAgYWRkUGF0aDogXCJzdHJpbmdzL3t7bG5nfX0ve3tuc319Lmpzb25cIixcclxuICAgICAgICBsb2FkUGF0aDogXCJzdHJpbmdzL3t7bG5nfX0ve3tuc319Lmpzb25cIlxyXG4gICAgfSxcclxuICAgIGRlYnVnOiBmYWxzZSxcclxuICAgIGRldGVjdGlvbjoge1xyXG4gICAgICAgIG9yZGVyOiBbXCJjb29raWVcIl0sXHJcbiAgICAgICAgY2FjaGVzOiBbXCJjb29raWVcIl0sXHJcbiAgICAgICAgbG9va3VwQ29va2llOiBcIlBJLUNMUlwiXHJcbiAgICB9LFxyXG4gICAgZmFsbGJhY2tMbmc6IFwiZW4tR0JcIixcclxuICAgIGxvYWQ6IFwiY3VycmVudE9ubHlcIixcclxuICAgIG5zOiBbXCJzaGFyZWRcIl1cclxufSwgZnVuY3Rpb24gKGVycm9yLCB0KSB7XHJcbiAgICAvLyBUZWxsIEtub2Nrb3V0IHRvIHN0YXJ0IHVwIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhZnRlclxyXG4gICAgLy8gbG9hZGluZyB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlIHJlc291cmNlcy5cclxuICAgIC8vIFRPRE86IFNoYXJlZCByZXNvdXJjZXMgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IHN0YXJ0dXAuXHJcbiAgICBrby5hcHBseUJpbmRpbmdzKCk7XHJcbn0pO1xyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAga28uY2xlYW5Ob2RlKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGtvLmkxOG4ubGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL21haW4udHNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSg0Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaTE4bmV4dC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MVwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMzIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjFcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgzNik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaTE4bmV4dC14aHItYmFja2VuZC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5kZWJ1Zy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY29yZWZ4XzJmNTQzMzZlMTkxNTBjOWQzOTYxXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNTApO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0LnZhbGlkYXRpb24vZGlzdC9rbm9ja291dC52YWxpZGF0aW9uLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjFcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG5yZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG52YXIgYXBwXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FwcFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBhcHBfMS5kZWZhdWx0O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9hcHAudHNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYmFzZS5kLnRzXCIgLz5cclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5yZXF1aXJlKFwiLi9leHRlbmRlcnMvaTE4blwiKTtcclxudmFyIHR5cGVhaGVhZF8xID0gcmVxdWlyZShcIi4vYmluZGluZ0hhbmRsZXJzL3R5cGVhaGVhZFwiKTtcclxudmFyIHdlYnBhY2tfbG9hZGVyXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3dlYnBhY2stbG9hZGVyXCIpO1xyXG52YXIgY29sb3JwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29udHJvbHMvY29sb3JwaWNrZXJcIik7XHJcbnZhciBjb3VudGRvd25fMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29udHJvbHMvY291bnRkb3duXCIpO1xyXG52YXIgY3VsdHVyZXNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29udHJvbHMvY3VsdHVyZXNcIik7XHJcbnZhciB0aW1lc3Bhbl8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb250cm9scy90aW1lc3BhblwiKTtcclxudmFyIHZhbGlkYXRpb25lcnJvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29udHJvbHMvdmFsaWRhdGlvbmVycm9yc1wiKTtcclxuLy9cclxuLy8gUmVnaXN0ZXIgS08gbG9hZGVycy5cclxuLy9cclxua28uY29tcG9uZW50cy5sb2FkZXJzLnVuc2hpZnQod2VicGFja19sb2FkZXJfMS5kZWZhdWx0KTtcclxuLy9cclxuLy8gUmVnaXN0ZXIgS08gZXh0ZW5kZXJzLlxyXG4vL1xyXG5rby5iaW5kaW5nSGFuZGxlcnMudHlwZWFoZWFkID0gdHlwZWFoZWFkXzEuZGVmYXVsdDtcclxuLy9cclxuLy8gUmVnaXN0ZXIgS08gY29tcG9uZW50cy5cclxuLy8gICB1aS0gPT4gU3RhbmRhcmQgVUkgY29tcG9uZW50c1xyXG4vLyAgIHBpLSA9PiBBcHBsaWNhdGlvbiBjb21wb25lbnRzXHJcbi8vXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ1aS1jb2xvcnBpY2tlclwiLCBjb2xvcnBpY2tlcl8xLmRlZmF1bHQpO1xyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidWktY291bnRkb3duXCIsIGNvdW50ZG93bl8xLmRlZmF1bHQpO1xyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidWktY3VsdHVyZXNcIiwgY3VsdHVyZXNfMS5kZWZhdWx0KTtcclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInVpLXRpbWVzcGFuXCIsIHRpbWVzcGFuXzEuZGVmYXVsdCk7XHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ1aS12YWxpZGF0aW9uZXJyb3JzXCIsIHZhbGlkYXRpb25lcnJvcnNfMS5kZWZhdWx0KTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvYmFzZS50c1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCAoYykgSsOhbm9zIEphbmthLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpMThuLmQudHNcIiAvPlxyXG52YXIga28gPSByZXF1aXJlKFwia25vY2tvdXRcIik7XHJcbnZhciBpMThuZXh0ID0gcmVxdWlyZShcImkxOG5leHRcIik7XHJcbnZhciBsYW5ndWFnZSA9IGtvLm9ic2VydmFibGUoKTtcclxua28uaTE4biA9IHtcclxuICAgIGdldCBsYW5ndWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gbGFuZ3VhZ2UoKTtcclxuICAgIH0sXHJcbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcclxuICAgICAgICBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKHZhbHVlLCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiAhZXJyICYmIGxhbmd1YWdlKHZhbHVlKTsgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxhbmd1YWdlcygpIHtcclxuICAgICAgICByZXR1cm4gaTE4bmV4dC5sYW5ndWFnZXM7XHJcbiAgICB9LFxyXG4gICAgdDogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbGFuZ3VhZ2UoKSA/IGkxOG5leHQudChrZXksIG9wdGlvbnMpIDogXCJcIjsgfSk7XHJcbiAgICB9XHJcbn07XHJcbmtvLmV4dGVuZGVycy5pMThuT3B0aW9ucyA9IGZ1bmN0aW9uICh0YXJnZXQsIGkxOG5PcHRpb25zKSB7XHJcbiAgICB0YXJnZXQuaTE4bk9wdGlvbnMgPSBpMThuT3B0aW9ucztcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcbmtvLmV4dGVuZGVycy5kaXNwbGF5TmFtZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGRpc3BsYXlOYW1lKSB7XHJcbiAgICB0YXJnZXQuZGlzcGxheU5hbWUgPSBrby5pMThuLnQoZGlzcGxheU5hbWUsIHRhcmdldC5pMThuT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5rby5leHRlbmRlcnMuZGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodGFyZ2V0LCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGFyZ2V0LmRlc2NyaXB0aW9uID0ga28uaTE4bi50KGRlc2NyaXB0aW9uLCB0YXJnZXQuaTE4bk9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuLy8gVGhpcyB3aWxsIG5vdGlmeSBhbGwgbG9jYWxpemFibGUgZGVwZW5kZW5jaWVzIGFib3V0IGNoYW5nZXMuIFxyXG5pMThuZXh0Lm9uKFwibGFuZ3VhZ2VDaGFuZ2VkXCIsIGZ1bmN0aW9uIChsbmcpIHsgcmV0dXJuIGxhbmd1YWdlKGxuZyk7IH0pO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9leHRlbmRlcnMvaTE4bi50c1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBJbnNwaXJlZCBieSB0d2l0dGVyLmNvbSdzIGF1dG9jb21wbGV0ZSBzZWFyY2ggZnVuY3Rpb25hbGl0eSxcclxuLy8gdHlwZWFoZWFkLmpzIGlzIGEgZmxleGlibGUgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgcHJvdmlkZXMgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgYnVpbGRpbmcgcm9idXN0IHR5cGVhaGVhZHNcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3aXR0ZXIvdHlwZWFoZWFkLmpzL2Jsb2IvbWFzdGVyL2RvYy9qcXVlcnlfdHlwZWFoZWFkLm1kXHJcbi8vXHJcbi8vIENvcHlyaWdodCAoYykgSsOhbm9zIEphbmthLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBlYWhlYWQuZC50c1wiIC8+XHJcbnZhciAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIC8qKiBBbiBhcnJheSBvZiBiaW5kaW5nIG5hbWVzIG11c3QgYmUgYXBwbGllZCB0byBhbiBlbGVtZW50IGJlZm9yZSBpdC4gKi9cclxuICAgIGFmdGVyOiBbXCJ2YWx1ZVwiXSxcclxuICAgIC8qKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJpbmRpbmcgaXMgZmlyc3QgYXBwbGllZCB0byBhbiBlbGVtZW50LiAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7XHJcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHZhbHVlQWNjZXNzb3IoKTtcclxuICAgICAgICB2YXIgZGF0YVNvdXJjZSA9IG9wdGlvbnMuZGF0YVNvdXJjZSB8fCB7fTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBhbGxCaW5kaW5ncy5nZXQoXCJ2YWx1ZVwiKSB8fCBvcHRpb25zLnZhbHVlO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgJGVsZW1lbnQudHlwZWFoZWFkKHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0OiBvcHRpb25zLmhpZ2hsaWdodCAhPT0gZmFsc2UsXHJcbiAgICAgICAgICAgIGhpbnQ6IG9wdGlvbnMuaGludCAhPT0gZmFsc2UsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogb3B0aW9ucy5taW5MZW5ndGggfHwgMSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlcjogXCJ1aS10eXBlYWhlYWRcIixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBcInVpLXR5cGVhaGVhZC1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgaGludDogXCJ1aS10eXBlYWhlYWQtaGludFwiLFxyXG4gICAgICAgICAgICAgICAgbWVudTogXCJ1aS10eXBlYWhlYWQtbWVudVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldDogXCJ1aS10eXBlYWhlYWQtZGF0YXNldFwiLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogXCJ1aS10eXBlYWhlYWQtc2VsZWN0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogXCJ1aS10eXBlYWhlYWQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IFwidWktdHlwZWhlYWQtZW1wdHlcIixcclxuICAgICAgICAgICAgICAgIG9wZW46IFwidWktdHlwZWFoZWFkLW9wZW5cIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJ1aS10eXBlYWhlYWQtY3Vyc29yXCIsXHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IFwidWktdHlwZWFoZWFkLWhpZ2hsaWdodFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGRhdGFTb3VyY2Uuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YVNvdXJjZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IGRhdGFTb3VyY2UuYXN5bmMsXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogZGF0YVNvdXJjZS5saW1pdCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRhdGFTb3VyY2UuZGlzcGxheSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlczogZGF0YVNvdXJjZS50ZW1wbGF0ZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUodmFsdWUpICYmICRlbGVtZW50XHJcbiAgICAgICAgICAgIC5iaW5kKFwidHlwZWFoZWFkOmNoYW5nZSB0eXBlYWhlYWQ6c2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gVHlwZWhlYWQgYXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBpbnB1dCBlbGVtZW50IHNvIHdlIGNhbiB1c2VcclxuICAgICAgICAgICAgLy8gdGhlIG1hcHBlZCB2YWx1ZSAoZGlzcGxheSBvcHRpb24pIGluc3RlYWQgb2YgdGhlIHJhdyBvYmplY3QgZ3JhcGggKHN1Z2dlc3Rpb24pXHJcbiAgICAgICAgICAgIC8vIHRvIG5vdGlmeSBLTyBhYm91dCB0aGVzZSBjaGFuZ2VzLlxyXG4gICAgICAgICAgICB2YWx1ZSgkZWxlbWVudC52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbGVtZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGJ5IEtub2Nrb3V0IG9yXHJcbiAgICAgICAgICAgIC8vIGlmIHNvbWUgb3RoZXIgcGFydCBvZiB5b3VyIGNvZGUgY2FsbHMga28ucmVtb3ZlTm9kZShlbGVtZW50KVxyXG4gICAgICAgICAgICAkZWxlbWVudC50eXBlYWhlYWQoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uY2Ugd2hlbiB0aGUgYmluZGluZyBpcyBmaXJzdCBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgYW5kIGFnYWluIHdoZW5ldmVyIHRoZSBhc3NvY2lhdGVkIG9ic2VydmFibGUgY2hhbmdlcyB2YWx1ZS4gKi9cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7XHJcbiAgICAgICAgIWFsbEJpbmRpbmdzLmhhcyhcInZhbHVlXCIpICYmICQoZWxlbWVudCkudmFsKGtvLnVud3JhcCh2YWx1ZUFjY2Vzc29yKCkudmFsdWUpKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvYmluZGluZ0hhbmRsZXJzL3R5cGVhaGVhZC50c1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MVxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErvv71ub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIC8vIFRoaXMgS25vY2tvdXQgY29tcG9uZW50IGxvYWRlciBpbnRlZ3JhdGVzIHdpdGggV2VicGFjaydzIGxhenktbG9hZGVkIGJ1bmRsZSBmZWF0dXJlLlxyXG4gICAgLy8ga28uY29tcG9uZW50cy5yZWdpc3RlcihcImNvbXBvbmVudFwiLCByZXF1aXJlKFwiYnVuZGxlP2xhenkhLi4vc29tZS1wYXRoLXRvLWEtanMtb3ItdHMtbW9kdWxlXCIpKTtcclxuICAgIC8vIGFuZCB0aGVuIGl0IHdpbGwgYmUgbG9hZGVkIG9uIGRlbWFuZCBpbnN0ZWFkIG9mIGJlaW5nIGxvYWRlZCB1cCBmcm9udC5cclxuICAgIGxvYWRDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lLCBjb21wb25lbnRDb25maWcsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRDb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb21wb25lbnRDb25maWcoZnVuY3Rpb24gKGxvYWRlZE1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZE1vZHVsZS5fX2VzTW9kdWxlICYmIGxvYWRlZE1vZHVsZS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkTW9kdWxlID0gbG9hZGVkTW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrby5jb21wb25lbnRzLmRlZmF1bHRMb2FkZXIubG9hZENvbXBvbmVudChuYW1lLCBsb2FkZWRNb2R1bGUsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvd2VicGFjay1sb2FkZXIudHNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG4vKiogQSBsaWdodHdlaWdodCBDb2xvciBQaWNrZXIgY29udHJvbCBleHBvc2VzIGEgdmFyaWV0eSBvZiBjb2xvciBzZXR0aW5ncy4gKi9cclxudmFyIENvbG9yUGlja2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQ29sb3JQaWNrZXIgY29udHJvbC4gKi9cclxuICAgIGZ1bmN0aW9uIENvbG9yUGlja2VyKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJhbXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5wYWxldHRlID0gcGFyYW1zLnBhbGV0dGUgfHwgQ29sb3JQaWNrZXIuZGVmYXVsdFBhbGV0dGU7XHJcbiAgICB9XHJcbiAgICAvKiogUmFpc2VkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBsaXN0IGVsZW1lbnQuICovXHJcbiAgICBDb2xvclBpY2tlci5wcm90b3R5cGUub25MaXN0Q2xpY2sgPSBmdW5jdGlvbiAodmlld01vZGVsLCBldmVudCkge1xyXG4gICAgICAgIGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUodmlld01vZGVsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAvLyBFdmVudCBidWJibGluZyBoZWxwcyB1cyB0byBhdm9pZCBhdHRhY2hpbmcgZXhwZW5zaXZlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgICAgIC8vIHRvIGVhY2ggY29sb3IgaXRlbS4gWW91IGNhbiBzaW1wbHkgZ2V0IHRoZSBjdXJyZW50IGNvbG9yIHVzaW5nXHJcbiAgICAgICAgICAgIC8vIGtvLmRhdGFGb3IoLi4uKSBwYXNzaW5nIHRoZSB0YXJnZXQgKGNsaWNrZWQgPGxpPikgZWxlbWVudCBpbnRvIGl0LlxyXG4gICAgICAgICAgICB2aWV3TW9kZWwudmFsdWUoa28uZGF0YUZvcihldmVudC50YXJnZXQpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yUGlja2VyLCBcImRlZmF1bHRQYWxldHRlXCIsIHtcclxuICAgICAgICAvKiogR2V0cyBhIHN0YXRpYyBpbnN0YW5jZSBvZiB0aGUgZGVmYXVsdCBjb2xvciBwYWxldHRlLiAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKENvbG9yUGlja2VyLnNfZGVmYXVsdFBhbGV0dGUgPSBDb2xvclBpY2tlci5zX2RlZmF1bHRQYWxldHRlIHx8IFtcclxuICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjYwMDAwXCIsIFwiIzk5MDAwMFwiLCBcIiNjYzAwMDBcIiwgXCIjZmYwMDAwXCIsIFwiI2ZmOTk5OVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjYzMzAwXCIsIFwiIzk5NGMwMFwiLCBcIiNjYzY2MDBcIiwgXCIjZmY4MDAwXCIsIFwiI2ZmY2M5OVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjY2NjAwXCIsIFwiIzk5OTkwMFwiLCBcIiNjY2NjMDBcIiwgXCIjZmZmZjAwXCIsIFwiI2ZmZmY5OVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDA2NjAwXCIsIFwiIzAwOTkwMFwiLCBcIiMwMGNjMDBcIiwgXCIjMDBmZjAwXCIsIFwiIzk5ZmY5OVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDA2NjMzXCIsIFwiIzAwOTljNFwiLCBcIiMwMGNjNjZcIiwgXCIjMDBmZjgwXCIsIFwiIzk5ZmZjY1wiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDA2NjY2XCIsIFwiIzAwOTk5OVwiLCBcIiMwMGNjY2NcIiwgXCIjMDBmZmZmXCIsIFwiIzk5ZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDAwMDY2XCIsIFwiIzAwMDA5OVwiLCBcIiMwMDAwY2NcIiwgXCIjMDAwMGZmXCIsIFwiIzk5OTlmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjYwMDY2XCIsIFwiIzk5MDA5OVwiLCBcIiNjYzAwY2NcIiwgXCIjZmYwMGZmXCIsIFwiI2ZmOTlmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjYwMDMzXCIsIFwiIzk5MDA0Y1wiLCBcIiNjYzAwNjZcIiwgXCIjZmYwMDdmXCIsIFwiI2ZmOTljY1wiLFxyXG4gICAgICAgICAgICAgICAgXCIjNjA2MDYwXCIsIFwiIzgwODA4MFwiLCBcIiNhMGEwYTBcIiwgXCIjYzBjMGMwXCIsIFwiI2UwZTBlMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmZmZmZmXCIsIG51bGxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQ29sb3JQaWNrZXI7XHJcbn0oKSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgdmlld01vZGVsOiBDb2xvclBpY2tlcixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9jb2xvcnBpY2tlci5odG1sXCIpXHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvY29sb3JwaWNrZXIudHNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx1bCBjbGFzcz1cXFwidWktY29sb3JwaWNrZXJcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDogcGFsZXR0ZSwgY2xpY2s6IG9uTGlzdENsaWNrXFxcIj5cXHJcXG4gICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7IHNlbGVjdGVkOiAkZGF0YSA9PT0gJHBhcmVudC52YWx1ZSgpLCBub3RzZXQ6ICRkYXRhID09PSBudWxsIH0sIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJGRhdGEgfVxcXCI+PC9saT5cXHJcXG48L3VsPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9jb250cm9scy9jb2xvcnBpY2tlci5odG1sXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCAoYykgSu+/vW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIga28gPSByZXF1aXJlKFwia25vY2tvdXRcIik7XHJcbnZhciBDb3VudGRvd24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQ291bnRkb3duIGNsYXNzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YW55fSBBIHNldCBvZiBrZXkvdmFsdWUgcGFpcnMgdG8gY29uZmlndXJlIHRoZSBUaW1lU3BhbiBjb250cm9sXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENvdW50ZG93bihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZUluVGlja3MgPSBrby51bndyYXAocGFyYW1zLnZhbHVlKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBwYXJhbXMuY29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5kYXlzID0ga28ub2JzZXJ2YWJsZSgwKTtcclxuICAgICAgICB0aGlzLmhvdXJzID0ga28ub2JzZXJ2YWJsZSgwKTtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBrby5vYnNlcnZhYmxlKDApO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd24oKTtcclxuICAgIH1cclxuICAgIENvdW50ZG93bi5wcm90b3R5cGUuY291bnRkb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFtb3VudCA9IHRoaXMuX3ZhbHVlSW5UaWNrcyAtIERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF5cyA9IDAsIGhvdXJzID0gMCwgbWlucyA9IDAsIHNlY3MgPSAwO1xyXG4gICAgICAgIGFtb3VudCA9IE1hdGguZmxvb3IoYW1vdW50IC8gMTAwMCk7XHJcbiAgICAgICAgZGF5cyA9IE1hdGguZmxvb3IoYW1vdW50IC8gODY0MDApO1xyXG4gICAgICAgIGFtb3VudCA9IGFtb3VudCAlIDg2NDAwO1xyXG4gICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcihhbW91bnQgLyAzNjAwKTtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgJSAzNjAwO1xyXG4gICAgICAgIG1pbnMgPSBNYXRoLmZsb29yKGFtb3VudCAvIDYwKTtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgJSA2MDtcclxuICAgICAgICBzZWNzID0gTWF0aC5mbG9vcihhbW91bnQpO1xyXG4gICAgICAgIHRoaXMuZGF5cyhkYXlzKTtcclxuICAgICAgICB0aGlzLmhvdXJzKGhvdXJzKTtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMobWlucyk7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzKHNlY3MpO1xyXG4gICAgICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmNvdW50ZG93bigpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb3VudGRvd247XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ291bnRkb3duID0gQ291bnRkb3duO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIHZpZXdNb2RlbDogQ291bnRkb3duLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2NvdW50ZG93bi5odG1sXCIpXHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvY291bnRkb3duLnRzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aS1jb3VudGRvd25cXFwiPlxcclxcbiAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IGRheXNcXFwiPjwvc3Bhbj4gZGF5KHMpXFxyXFxuICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogaG91cnNcXFwiPjwvc3Bhbj46PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBtaW51dGVzXFxcIj48L3NwYW4+OjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogc2Vjb25kc1xcXCI+PC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9jb250cm9scy9jb3VudGRvd24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIga28gPSByZXF1aXJlKFwia25vY2tvdXRcIik7XHJcbnZhciBDdWx0dXJlSW5mbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDdWx0dXJlSW5mbyhsYW5ndWFnZSwgZGlzcGxheU5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYW5ndWFnZSA9PT0ga28uaTE4bi5sYW5ndWFnZTsgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBDdWx0dXJlSW5mby5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlLmRpc3Bvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ3VsdHVyZUluZm87XHJcbn0oKSk7XHJcbnZhciBDdWx0dXJlTGlzdFZpZXdNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDdWx0dXJlTGlzdFZpZXdNb2RlbCgpIHtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IFtcclxuICAgICAgICAgICAgbmV3IEN1bHR1cmVJbmZvKFwiZW4tR0JcIiwgXCJFbmdsaXNoIChHQilcIiksXHJcbiAgICAgICAgICAgIG5ldyBDdWx0dXJlSW5mbyhcImh1LUhVXCIsIFwiSHVuZ2FyaWFuXCIpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIEN1bHR1cmVMaXN0Vmlld01vZGVsLnByb3RvdHlwZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uIChpbmZvKSB7XHJcbiAgICAgICAga28uaTE4bi5sYW5ndWFnZSA9IGluZm8ubGFuZ3VhZ2U7XHJcbiAgICB9O1xyXG4gICAgQ3VsdHVyZUxpc3RWaWV3TW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykgeyByZXR1cm4gaW5mby5kaXNwb3NlKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDdWx0dXJlTGlzdFZpZXdNb2RlbDtcclxufSgpKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICB2aWV3TW9kZWw6IEN1bHR1cmVMaXN0Vmlld01vZGVsLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2N1bHR1cmVzLmh0bWxcIilcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9jb250cm9scy9jdWx0dXJlcy50c1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IGxhbmd1YWdlcywgYXM6ICdsYW5ndWFnZUluZm8nIH0gLS0+XFxyXFxuPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7IGFjdGl2ZTogbGFuZ3VhZ2VJbmZvLmlzQWN0aXZlIH1cXFwiPlxcclxcbiAgICA8YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IGxhbmd1YWdlSW5mby5kaXNwbGF5TmFtZSwgY2xpY2s6ICRwYXJlbnQuY2hhbmdlTGFuZ3VhZ2UsIGNsaWNrQnViYmxlOiBmYWxzZVxcXCI+PC9hPlxcclxcbjwvbGk+XFxyXFxuPCEtLSAva28gLS0+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2N1bHR1cmVzLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG5mdW5jdGlvbiBhc051bWJlcihuKSB7XHJcbiAgICByZXR1cm4gbiA9PT0gdW5kZWZpbmVkID8gMCA6ICtuO1xyXG59XHJcbnZhciBUaW1lU3BhbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBUaW1lU3BhbiBjbGFzcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIEEgc2V0IG9mIGtleS92YWx1ZSBwYWlycyB0byBjb25maWd1cmUgdGhlIFRpbWVTcGFuIGNvbnRyb2wuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFRpbWVTcGFuKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRheXMgPSBrby5vYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcImNvbnRyb2xzOnRpbWVzcGFuLmRheXNcIixcclxuICAgICAgICAgICAgbWluOiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ob3VycyA9IGtvLm9ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAuZXh0ZW5kKHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiY29udHJvbHM6dGltZXNwYW4uaG91cnNcIixcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDIzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5taW51dGVzID0ga28ub2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5leHRlbmQoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJjb250cm9sczp0aW1lc3Bhbi5taW51dGVzXCIsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA1OVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IGtvLm9ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAuZXh0ZW5kKHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiY29udHJvbHM6dGltZXNwYW4uc2Vjb25kc1wiLFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNTlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gcGFyYW1zLnZhbHVlO1xyXG4gICAgICAgIHRoaXMubG9hZEZyb21TdHJpbmcoa28udW53cmFwKHRoaXMudmFsdWUpKTtcclxuICAgICAgICB0aGlzLl9kID0gdGhpcy5kYXlzLnN1YnNjcmliZSh0aGlzLnRpbWVDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9oID0gdGhpcy5ob3Vycy5zdWJzY3JpYmUodGhpcy50aW1lQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbSA9IHRoaXMubWludXRlcy5zdWJzY3JpYmUodGhpcy50aW1lQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcyA9IHRoaXMuc2Vjb25kcy5zdWJzY3JpYmUodGhpcy50aW1lQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvKiogUmFpc2VkIGltbWVkaWF0ZWx5IGFmdGVyIG9uZSBvZiB0aGUgdGltZSB2YWx1ZXMgaGFzIGNoYW5nZWQuICovXHJcbiAgICBUaW1lU3Bhbi5wcm90b3R5cGUudGltZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldFZhbHVlcygpLCBkYXlzID0gX2FbMF0sIGhvdXJzID0gX2FbMV0sIG1pbnV0ZXMgPSBfYVsyXSwgc2Vjb25kcyA9IF9hWzNdO1xyXG4gICAgICAgIHZhciByZW0gPSBzZWNvbmRzICUgNjA7XHJcbiAgICAgICAgbWludXRlcyArPSAoc2Vjb25kcyAtIHJlbSkgLyA2MDtcclxuICAgICAgICBzZWNvbmRzID0gcmVtO1xyXG4gICAgICAgIHJlbSA9IG1pbnV0ZXMgJSA2MDtcclxuICAgICAgICBob3VycyArPSAobWludXRlcyAtIHJlbSkgLyA2MDtcclxuICAgICAgICBtaW51dGVzID0gcmVtO1xyXG4gICAgICAgIHJlbSA9IGhvdXJzICUgMjQ7XHJcbiAgICAgICAgZGF5cyArPSAoaG91cnMgLSByZW0pIC8gMjQ7XHJcbiAgICAgICAgaG91cnMgPSByZW07XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXMoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMudmFsdWUodGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgdGltZSB2YWx1ZXMgZnJvbSB0aGUgc3BlY2lmaWVkIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdGhhdCBjb250YWlucyB0aW1lIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgVGltZVNwYW4ucHJvdG90eXBlLmxvYWRGcm9tU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gdmFsdWUgPyB2YWx1ZS5zcGxpdChcIjpcIiwgNCkgOiBbXTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlcyhhc051bWJlcihzbG90c1swXSksIGFzTnVtYmVyKHNsb3RzWzFdKSwgYXNOdW1iZXIoc2xvdHNbMl0pLCBhc051bWJlcihzbG90c1szXSkpO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXRzIGFsbCB0aGUgdGltZSBjb21wb25lbnRzIHVzaW5nIGEgdHVwbGUgeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9LiAqL1xyXG4gICAgVGltZVNwYW4ucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZGF5cygpLCB0aGlzLmhvdXJzKCksIHRoaXMubWludXRlcygpLCB0aGlzLnNlY29uZHMoKV07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGFsbCB0aGUgdGltZSBjb21wb25lbnRzIHVzaW5nIHRoZSBzcGVjaWZpZWQgdmFsdWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkYXlzICAgICBUaGUgZGF5cyBjb21wb25lbnQgb2YgdGhlIHRpbWUgaW50ZXJ2YWwuXHJcbiAgICAgKiBAcGFyYW0gaG91cnMgICAgVGhlIGhvdXJzIGNvbXBvbmVudCBvZiB0aGUgdGltZSBpbnRlcnZhbC5cclxuICAgICAqIEBwYXJhbSBtaW51dGVzICBUaGUgbWludXRlcyBjb21wb25lbnQgb2YgdGhlIHRpbWUgaW50ZXJ2YWwuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kcyAgVGhlIHNlY29uZHMgY29tcG9uZW50IG9mIHRoZSB0aW1lIGludGVydmFsLlxyXG4gICAgICovXHJcbiAgICBUaW1lU3Bhbi5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgdGhpcy5kYXlzKGRheXMpO1xyXG4gICAgICAgIHRoaXMuaG91cnMoaG91cnMpO1xyXG4gICAgICAgIHRoaXMubWludXRlcyhtaW51dGVzKTtcclxuICAgICAgICB0aGlzLnNlY29uZHMoc2Vjb25kcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqIENvbnZlcnRzIHRoaXMgdGltZSBzcGFuIHRvIHN0cmluZy4gKi9cclxuICAgIFRpbWVTcGFuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldFZhbHVlcygpLCBkYXlzID0gX2FbMF0sIGhvdXJzID0gX2FbMV0sIG1pbnV0ZXMgPSBfYVsyXSwgc2Vjb25kcyA9IF9hWzNdO1xyXG4gICAgICAgIHJldHVybiBkYXlzICsgXCI6XCIgKyBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxuICAgIH07XHJcbiAgICAvKiogUGVyZm9ybXMgYXBwbGljYXRpb24tZGVmaW5lZCB0YXNrcyBhc3NvY2lhdGVkIHdpdGggZnJlZWluZywgcmVsZWFzaW5nLCBvciByZXNldHRpbmcgdW5tYW5hZ2VkIHJlc291cmNlcy4gKi9cclxuICAgIFRpbWVTcGFuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2QgJiYgdGhpcy5fZC5kaXNwb3NlKCksIHRoaXMuX2QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2ggJiYgdGhpcy5faC5kaXNwb3NlKCksIHRoaXMuX2ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX20gJiYgdGhpcy5fbS5kaXNwb3NlKCksIHRoaXMuX20gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3MgJiYgdGhpcy5fcy5kaXNwb3NlKCksIHRoaXMuX3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGltZVNwYW47XHJcbn0oKSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgdmlld01vZGVsOiBUaW1lU3BhbixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi90aW1lc3Bhbi5odG1sXCIpXHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdGltZXNwYW4udHNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLXRpbWVzcGFuXFxcIj5cXHJcXG4gICAgPGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDogZGF5cy5kaXNwbGF5TmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwiZGF5c1xcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogZGF5c1xcXCIgLz5cXHJcXG4gICAgPGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDogaG91cnMuZGlzcGxheU5hbWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcImhvdXJzXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBob3Vyc1xcXCIgLz5cXHJcXG4gICAgPGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDogbWludXRlcy5kaXNwbGF5TmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwibWludXRlc1xcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogbWludXRlc1xcXCIgLz5cXHJcXG4gICAgPGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDogc2Vjb25kcy5kaXNwbGF5TmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwic2Vjb25kc1xcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogc2Vjb25kc1xcXCIgLz5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdGltZXNwYW4uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgVmFsaWRhdGlvbkVycm9ycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFZhbGlkYXRpb25FcnJvcnMgY29udHJvbC4gKi9cclxuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcnMocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBwYXJhbXMuZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFZhbGlkYXRpb25FcnJvcnM7XHJcbn0oKSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgdmlld01vZGVsOiBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL3ZhbGlkYXRpb25lcnJvcnMuaHRtbFwiKVxyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL3ZhbGlkYXRpb25lcnJvcnMudHNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLXZhbGlkYXRpb24tZXJyb3JzXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGVycm9ycygpLmxlbmd0aFxcXCI+XFxyXFxuICAgIDx1bCBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGVycm9yc1xcXCI+XFxyXFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkZGF0YVxcXCI+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdmFsaWRhdGlvbmVycm9ycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCAoYykgSsOhbm9zIEphbmthLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbnJlcXVpcmUoXCJib290c3RyYXBcIik7XHJcbnZhciBrbyA9IHJlcXVpcmUoXCJrbm9ja291dFwiKTtcclxucmVxdWlyZShcImtvLWNvbXBvbmVudC1yb3V0ZXJcIik7XHJcbnZhciBuYXZiYXJfMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC9uYXZiYXJcIik7XHJcbnZhciBmb290ZXJfMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC9mb290ZXJcIik7XHJcbnZhciBsb2dpbl8xID0gcmVxdWlyZShcIi4vaWRlbnRpdHkvbG9naW5cIik7XHJcbnZhciByZWdpc3Rlcl8xID0gcmVxdWlyZShcIi4vaWRlbnRpdHkvcmVnaXN0ZXJcIik7XHJcbnZhciBBcHBWaWV3TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwVmlld01vZGVsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVzID0ge1xyXG4gICAgICAgICAgICBcIi9cIjogXCJwaS1ob21lXCIsXHJcbiAgICAgICAgICAgIFwiL2Fib3V0XCI6IFwicGktYWJvdXRcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gTG9hZCBhbmQgcmVnaXN0ZXIgYWxsIHRoZSBLTyBjb21wb25lbnRzIG5lZWRlZCB0byBoYW5kbGUgdGhlIHJvdXRlcy5cclxuICAgICAgICAvLyBUaGUgb3B0aW9uYWwgJ2J1bmRsZT9sYXp5IScgcHJlZml4IGlzIGEgV2VicGFjayBmZWF0dXJlIHRoYXQgY2F1c2VzIHRoZSByZWZlcmVuY2VkIG1vZHVsZXNcclxuICAgICAgICAvLyB0byBiZSBzcGxpdCBpbnRvIHNlcGFyYXRlIGZpbGVzIHRoYXQgYXJlIHRoZW4gbG9hZGVkIG9uIGRlbWFuZC5cclxuICAgICAgICAvLyBGb3IgZG9jcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2J1bmRsZS1sb2FkZXIuXHJcbiAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcihcInBpLW5hdmJhclwiLCBuYXZiYXJfMS5kZWZhdWx0KTtcclxuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGktZm9vdGVyXCIsIGZvb3Rlcl8xLmRlZmF1bHQpO1xyXG4gICAgICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJwaS1ob21lXCIsIHJlcXVpcmUoXCJidW5kbGU/bGF6eSEuL3NoYXJlZC9ob21lXCIpKTtcclxuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGktYWJvdXRcIiwgcmVxdWlyZShcImJ1bmRsZT9sYXp5IS4vc2hhcmVkL2Fib3V0XCIpKTtcclxuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGktaWRlbnRpdHktbG9naW5cIiwgbG9naW5fMS5kZWZhdWx0KTtcclxuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGktaWRlbnRpdHktcmVnaXN0ZXJcIiwgcmVnaXN0ZXJfMS5kZWZhdWx0KTtcclxuICAgIH1cclxuICAgIEFwcFZpZXdNb2RlbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBUbyBzdXBwb3J0IGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQsIHRoaXMgbWV0aG9kIHVucmVnaXN0ZXJzIHRoZSByb3V0ZXIgYW5kIEtPIGNvbXBvbmVudHMuXHJcbiAgICAgICAgLy8gSW4gcHJvZHVjdGlvbiBzY2VuYXJpb3Mgd2hlcmUgaG90IG1vZHVsZSByZXBsYWNlbWVudCBpcyBkaXNhYmxlZCwgdGhpcyB3b3VsZCBub3QgYmUgaW52b2tlZC5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhrby5jb21wb25lbnRzLl9hbGxSZWdpc3RlcmVkQ29tcG9uZW50cylcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUuaW5kZXhPZihcInBpLVwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAga28uY29tcG9uZW50cy51bnJlZ2lzdGVyKGNvbXBvbmVudE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwcFZpZXdNb2RlbDtcclxufSgpKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICB2aWV3TW9kZWw6IEFwcFZpZXdNb2RlbCxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hcHAuaHRtbFwiKVxyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2FwcC50c1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgxMCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvanMvbnBtLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjFcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNTEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tvLWNvbXBvbmVudC1yb3V0ZXIvZGlzdC9rby1jb21wb25lbnQtcm91dGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjb3JlZnhfMmY1NDMzNmUxOTE1MGM5ZDM5NjFcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIE5hdkJhclZpZXdNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOYXZCYXJWaWV3TW9kZWwoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmF2QmFyVmlld01vZGVsO1xyXG59KCkpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIHZpZXdNb2RlbDogTmF2QmFyVmlld01vZGVsLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL25hdmJhci5odG1sXCIpXHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci50c1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1tYWluIG5hdmJhci1maXhlZC10b3BcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI21haW4tbmF2YmFyLWNvbGxhcHNlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHJlbD1cXFwibm9mb2xsb3dcXFwiIGhyZWY9XFxcIi9cXFwiPlBhcnRuZXJpbmZvPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJtYWluLW5hdmJhci1jb2xsYXBzZVxcXCIgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVxcXCJwYXRoOiAnL2Fib3V0J1xcXCI+QWJvdXQ8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga28uaTE4bi5sYW5ndWFnZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBkYXRhLWJpbmQ9XFxcImNvbXBvbmVudDogeyBuYW1lOiAndWktY3VsdHVyZXMnIH1cXFwiPjwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgSW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMzAwcHg7XFxcIiBkYXRhLWJpbmQ9XFxcImNvbXBvbmVudDogeyBuYW1lOiAncGktaWRlbnRpdHktbG9naW4nIH1cXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByZWw9XFxcIm5vZm9sbG93XFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDIxNiAyMTZcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0yMDQuMSAwSDExLjlDNS4zIDAgMCA1LjMgMCAxMS45djE5Mi4yYzAgNi42IDUuMyAxMS45IDExLjkgMTEuOWgxMDMuNXYtODMuNkg4Ny4yVjk5LjhoMjguMXYtMjRjMC0yNy45IDE3LTQzLjEgNDEuOS00My4xIDExLjkgMCAyMi4yLjkgMjUuMiAxLjN2MjkuMmgtMTcuM2MtMTMuNSAwLTE2LjIgNi40LTE2LjIgMTUuOXYyMC44aDMyLjNsLTQuMiAzMi42aC0yOFYyMTZoNTVjNi42IDAgMTEuOS01LjMgMTEuOS0xMS45VjExLjlDMjE2IDUuMyAyMTAuNyAwIDIwNC4xIDB6XFxcIj48L3BhdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci5odG1sXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCAoYykgSsOhbm9zIEphbmthLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBGb290ZXJWaWV3TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRm9vdGVyVmlld01vZGVsKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZvb3RlclZpZXdNb2RlbDtcclxufSgpKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICB2aWV3TW9kZWw6IEZvb3RlclZpZXdNb2RlbCxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9mb290ZXIuaHRtbFwiKVxyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIudHNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb290ZXIgY2xhc3M9XFxcInRoZW1lLWRhcmtlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LWlubGluZVxcXCIgZGF0YS1iaW5kPVxcXCJjb21wb25lbnQ6IHsgbmFtZTogJ3VpLWN1bHR1cmVzJyB9XFxcIj48L3VsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAmY29weTsgUGFydG5lcmluZm8gLSBBbGwgcmlnaHRzIHJlc2VydmVkLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9vdGVyPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIGtvID0gcmVxdWlyZShcImtub2Nrb3V0XCIpO1xyXG52YXIga29WYWxpZGF0aW9uID0gcmVxdWlyZShcImtub2Nrb3V0LnZhbGlkYXRpb25cIik7XHJcbnZhciBhY2NvdW50XzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvaWRlbnRpdHkvYWNjb3VudFwiKTtcclxuLyoqIFVzZWQgdG8gbG9nIGluIGEgdXNlciB0byB0aGUgc3lzdGVtLiAqL1xyXG52YXIgTG9naW5WaWV3TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjbGFzcy4gKi9cclxuICAgIGZ1bmN0aW9uIExvZ2luVmlld01vZGVsKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHBhcmFtcy5zZXJ2aWNlIHx8IGFjY291bnRfMS5BY2NvdW50U2VydmljZS5kZWZhdWx0O1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBrby5vYnNlcnZhYmxlKHBhcmFtcy5vcHRpb25zICYmIHBhcmFtcy5vcHRpb25zLmVtYWlsKVxyXG4gICAgICAgICAgICAuZXh0ZW5kKHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwic2hhcmVkOmFjY291bnQubG9naW4uZW1haWxcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwic2hhcmVkOmFjY291bnQubG9naW4uZW1haWxEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ7MH1cIixcclxuICAgICAgICAgICAgICAgIHBhcmFtczoga28uaTE4bi50KFwic2hhcmVkOmFjY291bnQubG9naW4uZW1haWxSZXF1aXJlZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGtvLm9ic2VydmFibGUocGFyYW1zLm9wdGlvbnMgJiYgcGFyYW1zLm9wdGlvbnMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC5leHRlbmQoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5wYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5wYXNzd29yZERlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInswfVwiLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBrby5pMThuLnQoXCJzaGFyZWQ6YWNjb3VudC5sb2dpbi5wYXNzd29yZFJlcXVpcmVkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvcnMgPSBrb1ZhbGlkYXRpb24uZ3JvdXAoW3RoaXMuZW1haWwsIHRoaXMucGFzc3dvcmRdKTtcclxuICAgIH1cclxuICAgIC8qKiBTdWJtaXRzIGxvZ2luIGRhdGEuICovXHJcbiAgICBMb2dpblZpZXdNb2RlbC5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKSAmJiB0aGlzLnNlcnZpY2UubG9naW4odGhpcy50b09iamVjdCgpKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9naW5WaWV3TW9kZWwucHJvdG90eXBlLCBcImlzVmFsaWRcIiwge1xyXG4gICAgICAgIC8qKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgb2JqZWN0IGlzIHZhbGlkLiAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uRXJyb3JzKCkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqIFZhbGlkYXRlcyB0aGlzIG9iamVjdCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoYXQgaXMgdmFsaWQuICovXHJcbiAgICBMb2dpblZpZXdNb2RlbC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzLnNob3dBbGxNZXNzYWdlcygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqIFNlcmlhbGl6ZXMgdGhpcyBvYmplY3QgdG8gYSBuYXRpdmUgSlMgb2JqZWN0LiAqL1xyXG4gICAgTG9naW5WaWV3TW9kZWwucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkKClcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dpblZpZXdNb2RlbDtcclxufSgpKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICB2aWV3TW9kZWw6IExvZ2luVmlld01vZGVsLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2xvZ2luLmh0bWxcIilcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9pZGVudGl0eS9sb2dpbi50c1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIi4uL2NvcmVcIik7XHJcbi8qKiBUaGlzIGNsYXNzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgQWNjb3VudCBNYW5hZ2VtZW50LiAqL1xyXG52YXIgQWNjb3VudFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWNjb3VudFNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvKiogTG9ncyBpbiB1c2luZyBhbiBhdXRoZW50aWNhdGlvbiBwcm92aWRlciBhcyBhIEhUVFAgUE9TVCBvcGVyYXRpb24uICovXHJcbiAgICBBY2NvdW50U2VydmljZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gY29yZV8xLmh0dHAoe1xyXG4gICAgICAgICAgICBwYXRoOiBcImFjY291bnQvbG9naW5cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSZWdpc3RlcnMgYSBuZXcgYWNjb3VudCBhcyBhIEhUVFAgUE9TVCBvcGVyYXRpb24uICovXHJcbiAgICBBY2NvdW50U2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gY29yZV8xLmh0dHAoe1xyXG4gICAgICAgICAgICBwYXRoOiBcImFjY291bnQvcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBVbnJlZ2lzdGVycyBhbiBleGlzdGluZyBhY2NvdW50IGFzIGEgSFRUUCBQT1NUIG9wZXJhdGlvbi4gKi9cclxuICAgIEFjY291bnRTZXJ2aWNlLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmVfMS5odHRwKHtcclxuICAgICAgICAgICAgcGF0aDogXCJhY2NvdW50L3VucmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBBIHN0YXRpYyBpbnN0YW5jZSBvZiB0aGUgc2VydmljZS4gVGhpcyBmaWVsZCBpcyByZWFkLW9ubHkuICovXHJcbiAgICBBY2NvdW50U2VydmljZS5kZWZhdWx0ID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XHJcbiAgICByZXR1cm4gQWNjb3VudFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWNjb3VudFNlcnZpY2UgPSBBY2NvdW50U2VydmljZTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvc2VydmljZXMvaWRlbnRpdHkvYWNjb3VudC50c1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIErDoW5vcyBKYW5rYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblwidXNlIHN0cmljdFwiO1xyXG52YXIgZXM2X3Byb21pc2VfMSA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKTtcclxuZnVuY3Rpb24gbm9vcCgpIHsgfVxyXG47XHJcbnZhciBodHRwUm91dGUgPSBcIi9hcGlcIjtcclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgUEkuYXBpKCkgbGV0cyB5b3UgbWFrZSBjYWxscyB0byB0aGUgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBBIHNldCBvZiBrZXkvdmFsdWUgcGFpcnMgdGhhdCBjb25maWd1cmUgYSBuZXcgSFRUUCByZXF1ZXN0LlxyXG4gKi9cclxuZnVuY3Rpb24gaHR0cChvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVxO1xyXG4gICAgdmFyIGNhbmNlbGVkID0gZmFsc2U7XHJcbiAgICByZXR1cm4gbmV3IGVzNl9wcm9taXNlXzEuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbm9vcDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLnJlc3BvbnNlVGV4dCA/IHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSkgOiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBub29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCBcImdldFwiLCBodHRwUm91dGUgKyBcIi9cIiArIG9wdGlvbnMucGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xyXG4gICAgICAgIG9wdGlvbnMucGFyYW1zID8gcmVxLnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5wYXJhbXMpKSA6IHJlcS5zZW5kKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBub29wO1xyXG4gICAgICAgIGNhbmNlbGVkID0gdHJ1ZTtcclxuICAgICAgICByZXEuYWJvcnQoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuaHR0cCA9IGh0dHA7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL3NlcnZpY2VzL2NvcmUudHNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMjMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNvcmVmeF8yZjU0MzM2ZTE5MTUwYzlkMzk2MVxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgZGF0YS1iaW5kPVxcXCJzdWJtaXQ6IHN1Ym1pdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luLWVtYWlsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IGVtYWlsLmRpc3BsYXlOYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibG9naW4tZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogZW1haWwsIGF0dHI6IHsgcGxhY2Vob2xkZXI6IGVtYWlsLnBsYWNlaG9sZGVyIH1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luLXBhc3N3b3JkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHBhc3N3b3JkLmRpc3BsYXlOYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibG9naW4tcGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogcGFzc3dvcmQsIGF0dHI6IHsgcGxhY2Vob2xkZXI6IHBhc3N3b3JkLnBsYWNlaG9sZGVyIH1cXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2lkZW50aXR5L2xvZ2luLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBKw6Fub3MgSmFua2EuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIFJlZ2lzdGVyVmlld01vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlZ2lzdGVyVmlld01vZGVsKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlZ2lzdGVyVmlld01vZGVsO1xyXG59KCkpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIHZpZXdNb2RlbDogUmVnaXN0ZXJWaWV3TW9kZWwsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmVnaXN0ZXIuaHRtbFwiKVxyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL3NyYy9jb21wb25lbnRzL2lkZW50aXR5L3JlZ2lzdGVyLnRzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvaWRlbnRpdHkvcmVnaXN0ZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdFx0Y2IocmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzP3tcXFwic2lsZW50XFxcIjp0cnVlfSEuL2hvbWUudHNcIikpO1xuXHR9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9idW5kbGUtbG9hZGVyP2xhenkhLi9DbGllbnRBcHAvc3JjL2NvbXBvbmVudHMvc2hhcmVkL2hvbWUudHNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRcdGNiKHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz97XFxcInNpbGVudFxcXCI6dHJ1ZX0hLi9hYm91dC50c1wiKSk7XG5cdH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2J1bmRsZS1sb2FkZXI/bGF6eSEuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9zaGFyZWQvYWJvdXQudHNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICdwaS1uYXZiYXInIH0gLS0+PCEtLSAva28gLS0+XFxyXFxuPG1haW4gZGF0YS1iaW5kPVxcXCJjb21wb25lbnQ6IHsgbmFtZTogJ2tvLWNvbXBvbmVudC1yb3V0ZXInLCBwYXJhbXM6IHsgcm91dGVzOiByb3V0ZXMsIGhhc2hiYW5nOiBmYWxzZSB9IH1cXFwiPjwvbWFpbj5cXHJcXG48IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAncGktZm9vdGVyJyB9IC0tPjwhLS0gL2tvIC0tPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9zcmMvY29tcG9uZW50cy9hcHAuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9