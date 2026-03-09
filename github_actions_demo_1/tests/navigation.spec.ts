import { test, expect } from '@playwright/test';

test('navigate to about page', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'About', exact: true }).click();
	await expect(page).toHaveURL('/about');
	await expect(page.getByTestId('about-heading')).toBeVisible();
});

test('navigate to counter page', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Counter', exact: true }).click();
	await expect(page).toHaveURL('/counter');
	await expect(page.getByTestId('count-value')).toBeVisible();
});

test('navigate back to home from inner page', async ({ page }) => {
	await page.goto('/about');
	await page.getByRole('link', { name: 'Home' }).click();
	await expect(page).toHaveURL('/');
	await expect(page.getByTestId('home-heading')).toBeVisible();
});
