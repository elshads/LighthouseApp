<script>
	import config from '../config.json';
	import {theme} from '../appStore.js';
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SkipToContent,
		Button,
		Link
	} from 'carbon-components-svelte';
	import UserAvatarFilledAlt20 from 'carbon-icons-svelte/lib/UserAvatarFilledAlt20';
	import Logout20 from 'carbon-icons-svelte/lib/Logout20';
	import BrightnessContrast20 from 'carbon-icons-svelte/lib/BrightnessContrast20';
	import Badge20 from 'carbon-icons-svelte/lib/Badge20';
	import { page, session } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let isSideNavOpen = false;
	let isOpen1 = false;

	async function changeTheme() {
		$theme = $theme === 'white' ? 'g100' : 'white';
	}

	async function logOut(){
		try {
			const response = await fetch('/auth/logout', {
				method: 'POST',
				body: JSON.stringify({
					session_id: $session.user.session_id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			if (data.id > 0) {
				location.reload();
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
	}
</script>

<Header bind:isSideNavOpen href="/">
	<a href="/" class="app-header-name">
		<button class="app-header-button">
			<img src="img/logo.png" alt="logo" height="32" class="mr-4"/>
			<span>{config.appname}</span>
		</button>
	</a>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="Theme" icon={BrightnessContrast20} on:click={changeTheme} />
		<HeaderAction
			bind:isOpen={isOpen1}
			icon={UserAvatarFilledAlt20}
			closeIcon={UserAvatarFilledAlt20}
		>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
		<HeaderGlobalAction aria-label="Logout" icon={Logout20} on:click={logOut} />
	</HeaderUtilities>
</Header>
