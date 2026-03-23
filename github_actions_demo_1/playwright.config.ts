/// <reference types="node" />
import { defineConfig } from '@playwright/test';
import { readFileSync } from 'fs';

// Load .env for local development; in CI, vars are injected by the runner
try {
	const lines = readFileSync(new URL('.env', import.meta.url), 'utf-8').split('\n');
	for (const line of lines) {
		const match = line.match(/^([^=\s#]+)\s*=\s*(.*)$/);
		if (match && !(match[1] in process.env)) process.env[match[1]] = match[2];
	}
} catch {
	// .env is optional
}

export default defineConfig({
	testDir: './tests',
	reporter: [['html'], ['list']],
	use: {
		baseURL: 'http://localhost:4173'
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI //false
	},
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium' }
		}
	]
});
