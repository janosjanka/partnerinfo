@ECHO OFF

ECHO Downloading node packages...
CALL npm install

ECHO.
ECHO Building core library scripts (Debug) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.corefx.js"

ECHO.
ECHO Building application scripts (Debug) ...
node "node_modules/webpack/bin/webpack.js"

PAUSE