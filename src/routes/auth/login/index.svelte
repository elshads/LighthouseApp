<script>
	const pageName = 'Login';
	import config from '../../../config.json';
	import notifications from '../../../appStore.js';
	import { TextInput, Button, Link } from 'carbon-components-svelte';

	let username = '';
	let password = '';
	let invalidUsername = false;
	let invalidPassword = false;
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
			type="email"
			invalid={invalidUsername}
			invalidText="Required: lastname.firstname@fh-swf.de"
			labelText="Username"
			placeholder="Enter username..."
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
	<div class="py-4">
		<Button>Log in</Button>
	</div>
	<div class="py-2">
		or <Link href="/auth/register">Register</Link>
	</div>
	<div class="py-2">
		<Link href="/auth/restore">Forgot password?</Link>
	</div>
</div>
