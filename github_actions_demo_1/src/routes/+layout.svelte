<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/counter">Counter</a>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		display: flex;
		gap: 1.5rem;
		padding: 1rem 2rem;
		background: #1a1a2e;
	}

	nav a {
		color: #e0e0e0;
		text-decoration: none;
		font-weight: 500;
	}

	nav a:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	main {
		padding: 2rem;
	}
</style>
