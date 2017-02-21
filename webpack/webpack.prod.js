const helper = require("./helper");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// noinspection JSUnresolvedVariable
module.exports = webpackMerge(commonConfig, {
  resolve: {
    alias: {
      config: helper.root("config/prod.js")
    },
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({})
  ]
});
