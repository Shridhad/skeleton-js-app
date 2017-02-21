const helper = require("./helper");

// noinspection JSUnresolvedVariable
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets=es2015", "xola-style-loader", "xola-template-loader"]
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader?strictMath&noIeCompat"]
      },
      {
        test: /\.njk$/,
        loader: "nunjucks-loader",
        query: {
          config: helper.root("nunjucks.config.js")
        }
      }
    ]
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".less"],
    alias: {
      config: helper.root("config/dev.js"),
    },
  }
};
