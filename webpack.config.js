const yargs = require("yargs");

const env = yargs.argv.env;
const ENV = env ? env : process.env.NODE_ENV || "Not Specified";

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
