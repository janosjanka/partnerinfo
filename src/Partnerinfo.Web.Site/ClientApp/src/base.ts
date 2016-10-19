﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="base.d.ts" />
import * as ko from "knockout";

import "./extenders/i18n";

import typeahead from "./bindingHandlers/typeahead";

import webpackLoader from "./components/webpack-loader";
import colorPicker from "./components/controls/colorpicker";
import countdown from "./components/controls/countdown";
import cultures from "./components/controls/cultures";
import timeSpan from "./components/controls/timespan";
import validationErrors from "./components/controls/validationerrors";

//
// Register KO loaders.
//
ko.components.loaders.unshift(webpackLoader);

//
// Register KO extenders.
//
ko.bindingHandlers.typeahead = typeahead;

//
// Register KO components.
//   ui- => Standard UI components
//   pi- => Application components
//
ko.components.register("ui-colorpicker", colorPicker);
ko.components.register("ui-countdown", countdown);
ko.components.register("ui-cultures", cultures);
ko.components.register("ui-timespan", timeSpan);
ko.components.register("ui-validationerrors", validationErrors);