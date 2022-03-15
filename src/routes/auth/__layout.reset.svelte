<script context="module">
	export async function load({ session }) {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	import { loading } from '$src/appStore.js';
	import { Loading } from 'carbon-components-svelte';
	import Notification from '$lib/Notification.svelte';
	import { onMount } from 'svelte';
	import config from '$src/config.json';

	$loading = true;

	onMount(async () => {
		document.documentElement.setAttribute('theme', 'white');
		$loading = false;
	});
</script>

<div class="auth-bg">
	<div class="auth-box p-4 m-auto">
		<slot />
	</div>
	<div class="company-logo">
		<a href={config.companypage} target="_blank">
			<img src="/img/company-logo.png" alt="company-logo" height="64" />
		</a>
	</div>
	<Notification />
</div>

<Loading bind:active={$loading} />
