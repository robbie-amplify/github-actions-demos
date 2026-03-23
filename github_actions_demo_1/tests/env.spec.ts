import { test, expect } from '@playwright/test';

test('EXAMPLE_SECRET environment variable is present', () => {
	expect(process.env.EXAMPLE_SECRET, 'EXAMPLE_SECRET must be set').toBeTruthy();
});

test('EXAMPLE_SECRET2 environment variable is present', () => {
	expect(process.env.EXAMPLE_SECRET2, 'EXAMPLE_SECRET2 must be set').toBeTruthy();
});
