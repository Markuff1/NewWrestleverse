import { test, expect } from '@playwright/test';
import { loginAs } from './utils';

test.describe('Unknown routes', () => {
  test('renders the NotFound page for an unmatched path', async ({ page }) => {
    await page.goto('/this-route-does-not-exist');

    await expect(page.locator('.NFContainer')).toBeVisible();
    // Header/Footer still render around the 404 content.
    await expect(page.locator('.HeaderBackground')).toBeVisible();
    await expect(page.locator('.FooterBackground')).toBeVisible();
  });

  test('renders NotFound even when authenticated', async ({ page }) => {
    await loginAs(page);
    await page.goto('/totally-made-up-page');

    await expect(page.locator('.NFContainer')).toBeVisible();
  });
});
