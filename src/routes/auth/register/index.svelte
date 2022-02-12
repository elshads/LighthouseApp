<script>
	const pageName = 'Register';
	import config from '../../../config.json';
	import notifications from '../../../appStore.js';
	import { TextInput, Button, Link } from 'carbon-components-svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let fullname = '';
	let password = '';
	let password_confirm = '';
	let invalidUsername = false;
	let invalidFullname = false;
	let invalidPassword = false;
	let invalidPasswordConfirmation = false;

	$: invalidUsername = !username.includes('@' + config.domain);
	$: invalidFullname = fullname.length < 1;
	$: invalidPassword = password.length < 6;
	$: invalidPasswordConfirmation = password != password_confirm;

	async function registerUser() {
		if (!invalidUsername && !invalidFullname && !invalidPassword && !invalidPasswordConfirmation) {
			try {
				const response = await fetch('/auth/register', {
					method: 'POST',
					body: JSON.stringify({
						username,
						fullname,
						password
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const data = await response.json();
				if (data.id > 0) {
					notifications.showNotification(true, 'success', 'User successfully registered');
					goto('/auth/login');
				} else {
					notifications.showNotification(true, 'error', data.message);
				}
			} catch (err) {
				notifications.showNotification(true, 'error', err.message);
			}
		} else {
			notifications.showNotification(true, 'error', 'Correct your entries and try again');
		}
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<div>
	<div>
		<img src="/img/logo_orig.png" alt="logo" height="64" />
	</div>
	<div class="py-2">
		<TextInput
			bind:value={username}
			type="email"
			invalid={invalidUsername}
			invalidText="Required: username@fh-swf.de"
			labelText="Username"
			placeholder="Enter username..."
		/>
	</div>
	<div class="py-2">
		<TextInput
			bind:value={fullname}
			type="text"
			invalid={invalidFullname}
			invalidText="Required"
			labelText="Full name"
			placeholder="Enter your name..."
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
		/>
	</div>
	<div class="py-2">
		<TextInput
			bind:value={password_confirm}
			type="password"
			invalid={invalidPasswordConfirmation}
			invalidText="password does not match"
			labelText="Password Confirmation"
			placeholder="Confirm password..."
		/>
	</div>
	<div class="py-4">
		<Button on:click={registerUser}>Register</Button>
	</div>
	<div class="py-2">
		or <Link href="/auth/login">Log in</Link>
	</div>
</div>
