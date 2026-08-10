import { test, expect } from '@playwright/test';
import { loginAs } from './utils';

test.describe('Login page', () => {
  test('renders the login form by default', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('toggles to the register form and back', async ({ page }) => {
    await page.goto('/');

    await page.getByText('No account? Register').click();
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();

    await page.getByText('Already have an account? Login').click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });

  test('shows a validation error when registering with empty fields', async ({ page }) => {
    await page.goto('/');
    await page.getByText('No account? Register').click();

    await page.getByRole('button', { name: 'Create Account' }).click();

    await expect(page.getByText('Username and password are required.')).toBeVisible();
  });

  test('shows an error for invalid login credentials', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill(`nonexistent-user-${Date.now()}`);
    await page.getByPlaceholder('Password').fill('not-a-real-password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid username or password.')).toBeVisible();
    // Should remain on the login page, not navigate to /home
    await expect(page).toHaveURL('/');
  });
});

test.describe('Route protection', () => {
  test('redirects unauthenticated users away from protected routes', async ({ page }) => {
    await page.goto('/Home');
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    await page.goto('/Roster');
    await expect(page).toHaveURL('/');
  });

  test('allows access to protected routes once "logged in"', async ({ page }) => {
    await loginAs(page);
    await page.goto('/Home');

    await expect(page).toHaveURL('/Home');
    await expect(page.getByText('Welcome to Wrestleverse')).toBeVisible();
  });

  test('logout clears the session and redirects to login', async ({ page }) => {
    await loginAs(page);
    await page.goto('/Home');

    await page.locator('.LogoutIconBtn').click();

    await expect(page).toHaveURL('/');
    await expect(
      await page.evaluate(() => window.localStorage.getItem('username'))
    ).toBeNull();
  });
});
