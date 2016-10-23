@ECHO OFF

ECHO Downloading node packages...
CALL npm install

ECHO.
ECHO Building core library scripts (Development) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.corefx.js"

ECHO.
ECHO Building application scripts (Development) ...
node "node_modules/webpack/bin/webpack.js"

PAUSE