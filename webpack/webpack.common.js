const helper = require("./helper");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin("css/styles.css?h=[contenthash]");

// noinspection JSUnresolvedVariable
module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: helper.root("dist"),
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
        loader: extractCSS.extract(["css", "less"])
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
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/images", to: "images" },
      { from: "src/fonts", to: "fonts" },
      { from: "src/index.html", to: "." }
    ]),
    extractCSS,
    new HtmlWebpackPlugin({
      inject: false,
      template: "!!ejs-loader!./src/index.html"
    })
  ]
};
