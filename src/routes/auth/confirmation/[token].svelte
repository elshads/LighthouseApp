
<script>
	const pageName = 'Email Confirmation';
	import { Link } from 'carbon-components-svelte';
	import Badge from 'carbon-pictograms-svelte/lib/Badge.svelte';
	import DoNot from 'carbon-pictograms-svelte/lib/DoNot.svelte';
	import CloudDownload from 'carbon-pictograms-svelte/lib/CloudDownload.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let confirmStatus = 0;
    let username = '';

	onMount(async () => {
		try {
			const response = await fetch(`/auth/confirmation/${$page.params.token}.json`);
			const data = await response.json();
			if (data.id > 0) {
                username = data.username;
				confirmStatus = 1;
			} else {
				confirmStatus = 2;
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
	});
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<div>
	{#if confirmStatus === 1}
		<div class="py-2">
			<Badge class="success-badge" />
		</div>
		<div class="py-4">
			<div>Email address <span style="color: #0f62fe">{username}</span> successfully confirmed. Thank you</div>
		</div>
		<div class="py-4">
			Click here to <Link href="/auth/login">Log in</Link>
		</div>
	{:else if confirmStatus === 2}
		<div class="py-2">
			<DoNot class="error-badge" />
		</div>
		<div class="py-4">
			<div>User does not exist or confirmation link expired</div>
		</div>
		<div class="py-4">
			<Link href="/auth/confirmation">Resend confirmation link</Link>
		</div>
	{:else}
		<div class="py-2">
			<CloudDownload class="loading-badge" />
		</div>
		<div class="py-4">
			<div>Checking...</div>
		</div>
	{/if}
</div>


<style>
    :global(svg.success-badge) {
    fill: #42be65;
    height: 54px;
    width: 54px;
}

:global(svg.error-badge) {
    fill: #da1e28;
    height: 54px;
    width: 54px;
}

:global(svg.loading-badge) {
    height: 54px;
    width: 54px;
}
</style>