import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	reporter: [['html'], ['list']],
	use: {
		baseURL: 'http://localhost:4173'
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: false
	},
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium' }
		}
	]
});
