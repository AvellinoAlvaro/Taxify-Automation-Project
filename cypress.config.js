const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dev-taxify-portal.shipcompliant-dev.com/", // Change depending on the environment you are testing into
    experimentalStudio: true,
    viewportHeight: 1024,
    viewportWidth: 1280,
  },
  env: {
    validUsername: "alvaro.avellino@taxify.com",
    validPassword: "Pluster25!",
  },
});
