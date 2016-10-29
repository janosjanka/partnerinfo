@ECHO OFF

ECHO Partnerinfo - Development Build
ECHO Copyright (c) Janos Janka. All rights reserved.
ECHO Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

ECHO.
ECHO Preparing ...
RMDIR "node_modules/jQuery" /S /Q

ECHO.
ECHO Building ...
CALL npm run build:dev

ECHO.
PAUSE