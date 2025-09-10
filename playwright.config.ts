import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',             // where your tests live
  timeout: 30 * 1000,             // each test times out after 30s
  expect: {
    timeout: 5000,                // wait up to 5s for expects
  },
  use: {
    baseURL: 'http://localhost:5173', // 👈 your Vite dev server
    headless: true,                   // set false to always see the browser
    screenshot: 'only-on-failure',    // auto-screenshot on failure
    video: 'retain-on-failure',       // keep video only when tests fail
  },

  // Optional: auto-start your dev server
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // wait up to 2min for dev server to be ready
  },
});
