// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

import "./extenders/i18n";

import typeahead from "./bindingHandlers/typeahead";

import "./components/webpack-loader";
import colorPicker from "./components/controls/colorpicker";
import countdown from "./components/controls/countdown";
import timeSpan from "./components/controls/timespan";
import validationErrors from "./components/controls/validationerrors";

// Registers KO extenders.
ko.bindingHandlers.typeahead = typeahead;

// Register KO components.
ko.components.register("colorpicker", colorPicker);
ko.components.register("countdown", countdown);
ko.components.register("timespan", timeSpan);
ko.components.register("validationerrors", validationErrors);