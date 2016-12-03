const dateFilter = require("nunjucks-date-filter");

module.exports = (env) => {
  env.addFilter("date", dateFilter);
};
