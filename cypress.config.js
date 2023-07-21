const { defineConfig } = require("cypress");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  projectId: 'k6aqyv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
      
    },
    experimentalStudio: true,
    screenshotOnRunFailure: false
  },
  video:false,
  retries: 0,
  viewportWidth: 1280,
  viewportHeight: 720,
//-------------------------------
  env:{
    adminUser:{
      username: 'admin',
      password: 'admin123',
    }
  },
//-------------------------------


})


