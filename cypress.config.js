const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www3.epa.gov/carbon-footprint-calculator/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
