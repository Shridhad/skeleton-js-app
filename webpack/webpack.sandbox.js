const helper = require("./helper");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// noinspection JSUnresolvedVariable
module.exports = webpackMerge(commonConfig, {
  output: {
    path: helper.root("dist"),
    filename: "js/main.js?h=[chunkhash]"
  },
  resolve: {
    extensions: ["", ".js", ".less"]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({})
  ]
});
