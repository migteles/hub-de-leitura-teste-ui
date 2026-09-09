const { allureCypress } = require ("allure-cypress/reporter");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  expose: {
    apiVersion: 'v2',
    featureFlag: true,
    environment: 'staging',
  },
  projectId: "2y7bme",
  defaultBrowser: 'chrome',

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "http://localhost:3000/",
    video: true

  },
});
