import { test, expect } from '@playwright/test';

test.describe('Tool - Obsidian Shortcodes to Hugo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/Obsidian-Shortcodes-to-Hugo');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Obsidian Shortcodes to Hugo - IT Tools');
  });

  test('', async ({ page }) => {

  });
});