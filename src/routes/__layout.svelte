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
		}
	}
</script>

<script>
	import { loading, theme } from '../appStore.js';
	import { Loading } from 'carbon-components-svelte';
	import { onMount } from 'svelte';

	import AppBar from '$lib/AppBar.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Notification from '$lib/Notification.svelte';
	let isSideNavOpen = false;

	onMount(async () => {
		document.documentElement.setAttribute('theme', $theme);
	});

	$: if (typeof window !== 'undefined') {
		document.documentElement.setAttribute('theme', $theme);
	}
</script>

<svelte:head>
	<meta content="noindex" />
</svelte:head>

<AppBar bind:isSideNavOpen />
<NavBar bind:isSideNavOpen />

<div class="content">
	<slot />
	<Notification />
</div>

<Loading bind:active={$loading} />
