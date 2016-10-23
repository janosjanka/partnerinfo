@ECHO OFF

node "node_modules/webpack/bin/webpack.js" --release --config "webpack.config.corefx.js"
node "node_modules/webpack/bin/webpack.js" --release

PAUSE