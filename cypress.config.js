const { defineConfig } = require("cypress");
const { allureCypress } = require ("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000/",
    projectId: "2y7bme",
    defaultBrowser: 'chrome',
    video: true
  },
});
