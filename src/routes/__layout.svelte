<script context="module">
	export async function load({ session }) {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/auth/login'
			};
		}
		return {
			// props:{
			// 	user_id: session.user_id
			// }
		};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { loading, theme } from '$src/appStore.js';
	import { Loading } from 'carbon-components-svelte';
	import { onMount } from 'svelte';

	import AppBar from '$lib/AppBar.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Notification from '$lib/Notification.svelte';
	import { goto } from '$app/navigation';
	let isSideNavOpen = false;

	$loading = true;

	onMount(async () => {
		document.documentElement.setAttribute('theme', $theme);
		$loading = false;
	});

	$: if (typeof window !== 'undefined') {
		document.documentElement.setAttribute('theme', $theme);
	}

	$: if(!$session.authenticated) {location.reload()};
</script>

<svelte:head>
	<meta content="noindex" />
	<link rel="stylesheet" href={`/css/charts/styles${$theme === 'g100' ? '-g100' : ''}.min.css`} />
</svelte:head>

<AppBar bind:isSideNavOpen />
<NavBar bind:isSideNavOpen />

<div class="content">
	<slot />
	<Notification />
</div>

<Loading bind:active={$loading} />
