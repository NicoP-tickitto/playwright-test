const { devices } = require('playwright');

module.exports = {
  use: {
    testIgnore: "**/src",
    testMatch: "'**/e2e/*.spec.js'",
    // Browser options
    headless: false,
    launchOptions: {
      slowMo: 50,
    },
    // Context options
    viewport: { width: 420, height: 720 },
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    // "Pixel 4" tests use Chromium browser.
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
  ],
};