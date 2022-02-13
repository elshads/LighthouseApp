<script context="module">
	export async function load({ session }) {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return { };
	}
</script>

<script>
	import { loading } from '../../appStore.js';
	import { Loading } from 'carbon-components-svelte';
	import Notification from '$lib/Notification.svelte';
	import { onMount } from 'svelte';
	import config from "../../config.json";

	onMount( async () => {
		document.documentElement.setAttribute('theme', 'white');
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

<style>
	.auth-bg {
		display: flex;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
		color: #1e1e1e;
	}

	.auth-box {
		display: block;
		background-color: #fff;
		width: 20rem;
		text-align: center;
		border-radius: 8px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.company-logo {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 1rem;
	}
</style>
