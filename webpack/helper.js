const path = require("path");

const root = path.resolve(__dirname, "..");

exports.root = (...args) => path.join(...[root].concat(args));
