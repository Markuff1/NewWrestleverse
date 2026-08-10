import { test, expect } from '@playwright/test';
import { loginAs } from './utils';

test.describe('Shows page', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page);
    await page.goto('/Shows');
  });

  test('lists weekly shows, current PPVs, and retired PPVs', async ({ page }) => {
    await expect(page.getByText('Weekly Shows')).toBeVisible();
    await expect(page.getByText('Current PPVs')).toBeVisible();
    await expect(page.getByText('Retired PPVs')).toBeVisible();

    await expect(page.locator('.WeeklyShow')).toHaveCount(3);
    await expect(page.locator('.PPVShows')).toHaveCount(12);
    await expect(page.locator('.retiredPPVShows')).toHaveCount(8);
  });

  test('clicking a weekly show navigates to its page', async ({ page }) => {
    await page.locator('.WeeklyShow').first().click();
    await expect(page).toHaveURL('/RAW');
  });

  test('clicking a PPV image navigates to its page', async ({ page }) => {
    await page.getByRole('link', { name: 'Wrestlemania' }).click();
    await expect(page).toHaveURL('/Wrestlemania');
  });
});
