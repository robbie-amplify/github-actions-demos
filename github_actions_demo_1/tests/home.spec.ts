import { test, expect } from '@playwright/test';

test('home page loads with correct title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/GitHub Actions Demo/);
});

test('home heading is visible', async ({ page }) => {
	await page.goto('/');
	const heading = page.getByTestId('home-heading');
	await expect(heading).toBeVisible();
	await expect(heading).toHaveText('GitHub Actions Demo');
});

test('nav links to about and counter are visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Counter', exact: true })).toBeVisible();
});
