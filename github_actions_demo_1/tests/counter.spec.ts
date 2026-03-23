import { test, expect } from '@playwright/test';

//update for push purpose (random extra line)
test('initial count is 0', async ({ page }) => {
	await page.goto('/counter');
	await expect(page.getByTestId('count-value')).toHaveText('0');
});

test('increment button increases count', async ({ page }) => {
	await page.goto('/counter');
	await page.getByTestId('increment-btn').click();
	await expect(page.getByTestId('count-value')).toHaveText('1');
});

test('increment accumulates correctly', async ({ page }) => {
	await page.goto('/counter');
	await page.getByTestId('increment-btn').click();
	await page.getByTestId('increment-btn').click();
	await page.getByTestId('increment-btn').click();
	await expect(page.getByTestId('count-value')).toHaveText('3');
});

test('decrement button decreases count', async ({ page }) => {
	await page.goto('/counter');
	await page.getByTestId('increment-btn').click();
	await page.getByTestId('increment-btn').click();
	await page.getByTestId('decrement-btn').click();
	await expect(page.getByTestId('count-value')).toHaveText('1');
});
