@ECHO OFF

ECHO Downloading node packages...
CALL npm install

ECHO.
ECHO Building core library scripts (Release) ...
node "node_modules/webpack/bin/webpack.js" --release --config "webpack.config.corefx.js"

ECHO.
ECHO Building application scripts (Release) ...
node "node_modules/webpack/bin/webpack.js" --release

PAUSE