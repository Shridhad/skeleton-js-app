const helper = require("./helper");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// noinspection JSUnresolvedVariable
module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",
  devServer: {
    inline: true,
    port: 8081
  }
});
