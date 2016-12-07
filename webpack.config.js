const path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

// noinspection JSUnresolvedVariable
module.exports = {
  entry: {
    app: "./src/js/main.js",
    vendor: ["jquery", "backbone", "backbone.marionette", "nunjucks", "nunjucks-date-filter"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets=es2015!xola-style-loader!xola-template-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
      },
      {
        test: /\.njk$/,
        loader: "nunjucks-loader",
        query: {
          config: path.join(__dirname, "nunjucks.config.js")
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: "source-map",
  devServer: {
    inline: true
  }
};
