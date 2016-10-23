@ECHO OFF

ECHO Partnerinfo - Distribution Build
ECHO Copyright (c) Janos Janka. All rights reserved.
ECHO Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

ECHO.
ECHO 1/4. Delete the jQuery folder (bug fix)...
RMDIR "node_modules/jQuery" /S /Q

ECHO.
ECHO 2/4. Restoring node packages...
CALL npm install

ECHO.
ECHO 3/4. Building core library...
CALL node "node_modules/webpack/bin/webpack.js" --dist --config "webpack.config.corefx.js"

ECHO.
ECHO 4/4. Building application...
CALL node "node_modules/webpack/bin/webpack.js" --dist

ECHO.
PAUSE