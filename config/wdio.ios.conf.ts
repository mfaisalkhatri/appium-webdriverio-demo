import config from "../config/wdio.server.conf";

// ============
// Specs
// ============
config.specs = ["../test/specs/*.ts"];
config.exclude = [];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    "LT:Options": {
      platformName: "ios",
      deviceName: "iPhone 11 Pro",
      platformVersion: "14",
      build: "proverbial ios app latest",
      name: "ios automation tests for proverbial app",
      project: "wdio appium ios automation",
      deviceOrientation: "portrait",
      autoAcceptAlerts: true,
      isRealMobile: true,
      w3c: true,
      app: "lt://APP10160531401680591668532103",
    },
  },
];

exports.config = config;
