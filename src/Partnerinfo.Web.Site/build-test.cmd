@ECHO OFF

ECHO Building test scripts (Debug) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.test.js"

PAUSE