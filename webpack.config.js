const path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

let extractCSS = new ExtractTextPlugin('css/styles.css');

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
        // loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
        loader: extractCSS.extract(['css', 'less'])
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
    new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.bundle.js"),
    extractCSS,
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
