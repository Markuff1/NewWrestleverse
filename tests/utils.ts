import { Page } from '@playwright/test';

/**
 * ProtectedRoute (src/ProtectedRoute.tsx) only checks for a truthy
 * "username" key in localStorage, so tests can seed it directly to
 * reach authenticated pages without going through the real Firebase login.
 */
export async function loginAs(page: Page, username = 'e2e-test-user') {
  await page.addInitScript((name) => {
    window.localStorage.setItem('username', name);
  }, username);
}
