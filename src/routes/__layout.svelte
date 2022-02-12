<script>
	import config from '../config.json';
	import {loading, currentUser, theme} from '../appStore.js';
	import { Loading } from 'carbon-components-svelte';
	import { onMount } from 'svelte';

	import AppBar from '$lib/AppBar.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import Notification from '$lib/Notification.svelte';
	let isSideNavOpen = false;

	
	onMount( async () => {
		document.documentElement.setAttribute('theme', $theme);
		$loading = true;
		await fetch(`${config.apiserver}/api/users/1`)
			.then((response) => response.json())
			.then((data) => {
				$currentUser = data.data[0];
			})
			.catch((err) => {
				console.log(err.message);
			});
		$loading = false;
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
