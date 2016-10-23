@ECHO OFF

ECHO Partnerinfo - Development Build
ECHO Copyright (c) Janos Janka. All rights reserved.
ECHO Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

ECHO.
ECHO Building test scripts (Spec) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.spec.js"

ECHO.
PAUSE