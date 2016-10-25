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

	module.exports = corefx_205be74bc332080d26f5;

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

	module.exports = (__webpack_require__(3))(51);

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
	    loadComponent: function (name, config, callback) {
	        if (typeof config === "function") {
	            config(function (loadedModule) {
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

	module.exports = (__webpack_require__(3))(52);

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
//# sourceMappingURL=main.js.map