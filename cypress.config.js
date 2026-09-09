const { defineConfig } = require("cypress");
import { allureCypress } from ("allure-cypress/reporter");

module.exports = defineConfig({
  defaultBrowser: 'chrome',

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "http://localhost:3000/",
    projectId: "2y7bme",
    video: true
  },
});
