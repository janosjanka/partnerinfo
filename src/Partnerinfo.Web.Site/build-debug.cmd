@ECHO OFF

ECHO Downloading node packages...
CALL npm install -optional

ECHO.
ECHO Building core library scripts (DEBUG) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.corefx.js"

ECHO.
ECHO Building application scripts (DEBUG) ...
node "node_modules/webpack/bin/webpack.js"

PAUSE