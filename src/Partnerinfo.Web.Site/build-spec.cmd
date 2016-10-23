@ECHO OFF

ECHO Building test scripts (Spec) ...
node "node_modules/webpack/bin/webpack.js" --config "webpack.config.spec.js"

PAUSE