const webpackConfig = require("./webpack/webpack.karma");

module.exports = (config) => {
  config.set({
    browsers: ["PhantomJS"],
    frameworks: ["jasmine"],
    files: [
      { pattern: "./tests/test.context.js", watched: false }
    ],
    preprocessors: {
      "./tests/test.context.js": ["webpack", "sourcemap"]
    },
    plugins: [
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-spec-reporter",
      "karma-webpack",
      "karma-jasmine",
      "karma-sourcemap-loader"
    ],
    reporters: ["spec"],
    webpack: webpackConfig,
    singleRun: true,
    webpackServer: {
      noInfo: true
    }
  });
};
