@ECHO OFF

node "node_modules/webpack/bin/webpack.js" --config "webpack.config.corefx.js"
node "node_modules/webpack/bin/webpack.js"

PAUSE