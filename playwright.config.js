import { chromium, PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
const config = {
    retries:1,
    timeout:300000,
    use:{
      headless: true,
      viewport:{width:1200, height:720},
    },
  projects: [ //Runs the test in browsers chromium, firefox, webkit
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

module.exports = config;