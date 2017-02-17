const yargs = require("yargs");
const _ = require("underscore");

const args = _.without(_.keys(yargs.argv), "_", "$0");
const ENV = args.length > 0 ? args[0] : process.env.NODE_ENV || "Not Specified";

console.log("ENV ", ENV);
switch (ENV) {
  case "prod":
  case "production":
    console.log("building for production");
    module.exports = require("./webpack/webpack.prod");
    break;
  case "stage":
  case "staging":
    console.log("building for staging");
    module.exports = require("./webpack/webpack.staging");
    break;
  case "sandbox":
    console.log("building for sandbox");
    module.exports = require("./webpack/webpack.sandbox");
    break;
  case "dev":
  case "development":
  default:
    console.log("building for development");
    module.exports = require("./webpack/webpack.dev");
}
