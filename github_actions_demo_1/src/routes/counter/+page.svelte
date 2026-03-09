<script lang="ts">
	let count = $state(0);
</script>

<h1>Counter</h1>

<p>Current count: <span data-testid="count-value">{count}</span></p>

<div>
	<button data-testid="decrement-btn" onclick={() => count--}>-</button>
	<button data-testid="increment-btn" onclick={() => count++}>+</button>
</div>

<style>
	div {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	button {
		font-size: 1.25rem;
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}
</style>
