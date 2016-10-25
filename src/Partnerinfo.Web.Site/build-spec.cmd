@ECHO OFF

ECHO Partnerinfo - Development Build
ECHO Copyright (c) Janos Janka. All rights reserved.
ECHO Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

CALL start http://localhost:9876/debug.html
CALL npm run test

ECHO.
PAUSE