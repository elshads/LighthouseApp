<script>
	const pageName = 'Send email confirmation';
	import { Link, Button, TextInput } from 'carbon-components-svelte';
	import Badge from 'carbon-pictograms-svelte/lib/Badge.svelte';
	import DoNot from 'carbon-pictograms-svelte/lib/DoNot.svelte';
	import notifications from '../../../appStore.js';
	import config from '../../../config.json';
	import { onMount } from 'svelte';

	let linkSent = false;
	let username = '';
	let invalidUsername = true;
	let usernameRef;

	onMount(async () => {
		usernameRef.focus();
	});

	$: invalidUsername = !(username.length > 0 && username.includes('@'));

	async function sendEmail() {
		if (!invalidUsername) {
			try {
				const response = await fetch('/auth/confirmation', {
					method: 'POST',
					body: JSON.stringify({
						username
					}),
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json'
					}
				});
				const data = await response.json();
				if (data.id > 0) {
					linkSent = true;
				} else {
					notifications.showNotification(true, 'error', data.message);
				}
			} catch (err) {
				notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
			}
		} else {
			notifications.showNotification(true, 'error', 'Correct your entries and try again');
		}
	}

	async function keyUp(event) {
		if (event.key === 'Enter') {
			await sendEmail();
		}
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<div>
	{#if linkSent}
		<div class="py-2">
			<Badge class="success-badge" />
		</div>
		<div class="py-8">
			<div>
				Confirmation link sent on email address: <span style="color: #0f62fe">{username}</span>
			</div>
		</div>
	{:else}
		<div>
			<img src="/img/logo_orig.png" alt="logo" height="96" />
		</div>
		<div class="py-2">
			<TextInput
				bind:value={username}
				bind:ref={usernameRef}
				type="email"
				invalid={invalidUsername}
				invalidText="Required"
				labelText="Email"
				placeholder="Enter email address..."
				on:keyup={keyUp}
			/>
		</div>
		<div class="py-4">
			<Button on:click={sendEmail}>Send confirmation link</Button>
		</div>
	{/if}
	<div class="py-2">
		<Link href="/auth/login">Login</Link> or <Link href="/auth/register">Register</Link>
	</div>
</div>

<style>
	:global(svg.success-badge) {
		fill: #42be65;
		height: 54px;
		width: 54px;
	}
</style>
