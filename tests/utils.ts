import { Page } from '@playwright/test';

/**
 * ProtectedRoute (src/ProtectedRoute.tsx) lets the dev server through when the
 * "e2eUser" localStorage key is set (see src/auth.ts — it's stripped from
 * production builds), so tests can reach authenticated pages without a real
 * Firebase account. Firestore data still needs a real sign-in.
 */
export async function loginAs(page: Page, username = 'e2e-test-user') {
  await page.addInitScript((name) => {
    window.localStorage.setItem('e2eUser', name);
  }, username);
}
