const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    retries: 0,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
