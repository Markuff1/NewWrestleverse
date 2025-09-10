import { test, expect } from '@playwright/test';

test.describe('Wrestleverse Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // thanks to baseURL in config
  });

  test('shows error when username is missing', async ({ page }) => {
    await page.fill('input[placeholder="Password"]', 'testpass');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.login-error')).toHaveText('Invalid username or password.');
  });

  test('shows error when password is missing', async ({ page }) => {
    await page.fill('input[placeholder="Username"]', 'testuser');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.login-error')).toHaveText('Invalid username or password.');
  });

  test('shows error for wrong credentials', async ({ page }) => {
    await page.fill('input[placeholder="Username"]', 'wronguser');
    await page.fill('input[placeholder="Password"]', 'wrongpass');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.login-error')).toHaveText('Invalid username or password.');
  });

  test('navigates to register page when clicking link', async ({ page }) => {
    await page.click('text=No account? Click here to Register');
    await expect(page.locator('.login-title')).toHaveText('Register');
  });

  test('shows error when trying to register without username/password', async ({ page }) => {
    await page.click('text=No account? Click here to Register');
    await page.click('button:has-text("Register")');
    await expect(page.locator('.login-error')).toHaveText('Username and password are required.');
  });

  test('can register a new user and see success message', async ({ page }) => {
    await page.click('text=No account? Click here to Register');
    await page.fill('input[placeholder="Username"]', 'newuser123');
    await page.fill('input[placeholder="Password"]', 'newpass123');
    await page.click('button:has-text("Register")');
    await expect(page.locator('.login-error')).toHaveText('Registration successful. You can now log in.');
  });

  test('prevents registering with an existing username', async ({ page }) => {
    await page.click('text=No account? Click here to Register');
    await page.fill('input[placeholder="Username"]', 'existinguser'); // seed in Firebase
    await page.fill('input[placeholder="Password"]', 'password2');
    await page.click('button:has-text("Register")');
    await expect(page.locator('.login-error')).toHaveText('Username already exists.');
  });

  test('logs in successfully with valid credentials', async ({ page }) => {
    await page.fill('input[placeholder="Username"]', 'validuser1'); // seed in Firebase
    await page.fill('input[placeholder="Password"]', 'password1');
    await page.click('button:has-text("Login")');

    await expect(page).toHaveURL(/.*\/home/);
  });
});
