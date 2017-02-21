// Import any app and test setup files here

const testsContext = require.context(".", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
