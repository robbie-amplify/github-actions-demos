<h1 data-testid="about-heading">About</h1>
<p>
	This project demonstrates a CI pipeline using <strong>GitHub Actions</strong> and
	<strong>Playwright</strong>.
</p>
<p>
	Every time a pull request is opened against <code>main</code>, the workflow automatically builds
	the app and runs the full Playwright test suite. The PR is blocked from merging if any tests fail.
</p>
