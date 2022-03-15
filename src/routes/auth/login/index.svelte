<script>
	const pageName = 'Login';
	import notifications, { loading } from '$src/appStore.js';
	import { TextInput, Button, Link } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let invalidUsername = false;
	let invalidPassword = false;

	let usernameRef;

	onMount(async () => {
		usernameRef.focus();
	});

	async function loginUser() {
		try {
			const response = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					username,
					password
				}),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				}
			});
			const data = await response.json();
			if (data.id > 0) {
				location.reload();
			} else if (data.id === -2) {
				notifications.showNotification(
					true,
					'error',
					'Email is not confirmed. Please confirm your email',
					'Resend email',
					() => {
						goto('/auth/confirmation');
						notifications.showNotification(false);
					}
				);
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
	}

	async function keyUp(event) {
		if (event.key === 'Enter') {
			await loginUser();
		}
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<div>
	<div>
		<img src="/img/logo_orig.png" alt="logo" height="96" />
	</div>
	<div class="py-2">
		<TextInput
			bind:value={username}
			bind:ref={usernameRef}
			type="email"
			invalid={invalidUsername}
			invalidText="Required: username@fh-swf.de"
			labelText="Username"
			placeholder="Enter username..."
			on:keyup={keyUp}
		/>
	</div>
	<div class="py-2">
		<TextInput
			bind:value={password}
			type="password"
			invalid={invalidPassword}
			invalidText="Required: min length 6 characters"
			labelText="Password"
			placeholder="Enter password..."
			on:keyup={keyUp}
		/>
	</div>
	<div class="py-4">
		<Button on:click={loginUser}>Log in</Button>
	</div>
	<div class="py-2">
		or <Link href="/auth/register">Register</Link>
	</div>
	<div class="py-2">
		<Link href="/auth/restore">Forgot password?</Link>
	</div>
</div>
