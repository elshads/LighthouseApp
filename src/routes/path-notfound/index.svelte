<script>
	import { loading } from '$src/appStore.js';
	import { Loading, Link } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import DoNot from 'carbon-pictograms-svelte/lib/DoNot.svelte';

	$loading = true;

	onMount(async () => {
		$loading = false;
	});
</script>

<div class="py-2">
	<DoNot class="error-badge" />
</div>
<div class="py-4">
	<div>Page not found</div>
</div>
<div class="py-4">
	Go to <Link href="/">Homepage</Link>
</div>

<Loading bind:active={$loading} />

<style>
	:global(svg.error-badge) {
		fill: #da1e28;
		height: 54px;
		width: 54px;
	}
</style>
