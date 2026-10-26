const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      process.env.CYPRESS_BASE_URL ||
      "https://kasun-d-rajapaksha.github.io/coffee-shop/",
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
