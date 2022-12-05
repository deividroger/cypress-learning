const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f76hwb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: "https://www.amazon.com",
    viewportHeight: 800,
    viewportWidth: 1500,
    watchForFileChanges: false,
    defaultCommandTimeout: 30000
  },
});
