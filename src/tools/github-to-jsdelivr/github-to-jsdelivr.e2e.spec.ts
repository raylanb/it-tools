import { test, expect } from '@playwright/test';

test.describe('Tool - Github to jsdelivr', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/github-to-jsdelivr');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Github to jsdelivr - IT Tools');
  });

  test('', async ({ page }) => {

  });
});