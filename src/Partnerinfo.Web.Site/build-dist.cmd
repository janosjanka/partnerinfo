@ECHO OFF

ECHO Downloading node packages...
CALL npm install

ECHO.
ECHO Building core library scripts (Distribution) ...
node "node_modules/webpack/bin/webpack.js" --dist --config "webpack.config.corefx.js"

ECHO.
ECHO Building application scripts (Distribution) ...
node "node_modules/webpack/bin/webpack.js" --dist

PAUSE