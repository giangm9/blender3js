const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var prod = require('./webpack.common.js');
prod.plugins = [new UglifyJSPlugin()] ;
module.exports = prod;
