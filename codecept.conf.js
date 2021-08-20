const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
var hooks = require("./hooks");

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://automationpractice.com/index.php",
      browser: "chrome",
    },
    "Mochawesome": {
      "uniqueScreenshotNames": "true"
    }
  },
  include: {
    I: "./steps_file.js",
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    register_page: './pages/register_page.js'
  },
  async bootstrap() {
    await hooks.start();
  },
  async teardown() {
    await hooks.stop();
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: "curso-automacao-web-codeceptjs",
  plugins: {
    "allure": {
      "enabled": true
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
