/**
  * @license
  * Copyright (c) János Janka. All rights reserved.
  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
  */

import * as ko from "knockout";

import colorPicker from "./components/colorpicker";
import timeSpan from "./components/timespan";
import validationErrors from "./components/validationerrors";

ko.components.register("ui-colorpicker", colorPicker);
ko.components.register("ui-timespan", timeSpan);
ko.components.register("ui-validationerrors", validationErrors);