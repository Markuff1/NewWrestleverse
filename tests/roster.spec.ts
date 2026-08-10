import { test, expect } from '@playwright/test';
import { loginAs } from './utils';

test.describe('Roster page', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page);
    await page.goto('/Roster');
    // Roster is lazy-loaded; wait for the chunk to mount before interacting.
    await expect(page.getByRole('heading', { name: 'ROSTER' })).toBeVisible();
  });

  test('defaults to the ALL tab with matching content visible', async ({ page }) => {
    await expect(page.locator('button.tablinks.active')).toHaveText(/^ALL \(\d+\)$/);
    await expect(page.locator('.tabcontent', { hasText: 'ALL Roster' })).toBeVisible();
  });

  test('switching tabs shows only the selected tab content', async ({ page }) => {
    await page.getByRole('button', { name: /^Raw \(\d+\)$/ }).click();

    await expect(page.locator('button.tablinks.active')).toHaveText(/^Raw \(\d+\)$/);
    await expect(page.locator('.tabcontent', { hasText: 'Raw Roster' })).toBeVisible();
    await expect(page.locator('.tabcontent', { hasText: 'ALL Roster' })).toBeHidden();
  });

  test('searching filters wrestler cards across the active tab', async ({ page }) => {
    const searchBox = page.getByPlaceholder('Search for a wrestler...');
    const activeCards = page.locator('.tabcontent', { hasText: 'ALL Roster' }).locator('.profile-card');

    const initialCount = await activeCards.count();
    expect(initialCount).toBeGreaterThan(0);

    // Grab a real name from the first card so the search is guaranteed a match.
    const firstName = await activeCards.first().getAttribute('title');
    expect(firstName).toBeTruthy();
    const searchTerm = firstName!.slice(0, 4);

    await searchBox.fill(searchTerm);

    const filteredCount = await activeCards.count();
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);

    for (const title of await activeCards.evaluateAll(nodes =>
      nodes.map(n => n.getAttribute('title') ?? '')
    )) {
      expect(title.toLowerCase()).toContain(searchTerm.toLowerCase());
    }
  });

  test('searching for a nonsense string returns no cards', async ({ page }) => {
    await page.getByPlaceholder('Search for a wrestler...').fill('zzzznotawrestlerzzzz');
    await expect(
      page.locator('.tabcontent', { hasText: 'ALL Roster' }).locator('.profile-card')
    ).toHaveCount(0);
  });

  test('tab counts update to reflect the active search filter', async ({ page }) => {
    const allTabButton = page.getByRole('button', { name: /^ALL \(\d+\)$/ });
    const initialLabel = await allTabButton.textContent();
    const initialCount = Number(initialLabel?.match(/\((\d+)\)/)?.[1]);

    await page.getByPlaceholder('Search for a wrestler...').fill('zzzznotawrestlerzzzz');

    await expect(allTabButton).toHaveText('ALL (0)');
    expect(initialCount).toBeGreaterThan(0);
  });
});
