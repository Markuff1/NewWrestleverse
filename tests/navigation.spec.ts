import { test, expect } from '@playwright/test';
import { loginAs } from './utils';

test.describe('Header navigation', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page);
    await page.goto('/Home');
  });

  test('shows the Next PPV box and logout icon once logged in', async ({ page }) => {
    await expect(page.locator('.NextPPVBox')).toBeVisible();
    await expect(page.locator('.LogoutIconBtn')).toBeVisible();
  });

  test('navigates to Roster via the header link', async ({ page }) => {
    await page.locator('.Nav').getByRole('link', { name: 'Roster' }).click();
    await expect(page).toHaveURL('/Roster');
    await expect(page.getByRole('heading', { name: 'ROSTER' })).toBeVisible();
  });

  test('navigates to Shows via the header link', async ({ page }) => {
    await page.locator('.Nav').getByRole('link', { name: 'Shows' }).click();
    await expect(page).toHaveURL('/shows');
    await expect(page.getByRole('heading', { name: 'SHOWS' })).toBeVisible();
  });

  test('navigates to News via the header link', async ({ page }) => {
    await page.locator('.Nav').getByRole('link', { name: 'News' }).click();
    await expect(page).toHaveURL('/News');
  });

  test('opens the Shows dropdown and navigates to RAW', async ({ page }) => {
    await page.locator('.Dropdown').hover();
    await page.locator('.DropdownMenu').getByRole('link', { name: 'RAW' }).click();
    await expect(page).toHaveURL('/raw');
  });

  test('logo link returns to Home', async ({ page }) => {
    await page.goto('/Roster');
    await page.locator('.WLogo').click();
    await expect(page).toHaveURL('/Home');
  });
});
