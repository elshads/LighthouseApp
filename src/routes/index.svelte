<script>
	import { session } from '$app/stores';
	import notifications from '../appStore.js';
	import { ComboBox, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';
	import { onMount } from 'svelte';
	import Editor from '$lib/Editor.svelte';
	import Viewer from '$lib/Viewer.svelte';

	let avatar, fileinput;
	let content;
	let viewer = false;

	function onFileSelected(event) {
		let imageFile = event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(imageFile);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	}
</script>

<svelte:head>
	<title>Lighthouse</title>
</svelte:head>

<h1>Welcome to Lighthouse Loyalty club</h1>
<p class="my-4">
	Visit <a href="https://elearning.fh-swf.de/course/view.php?id=13764" target="_blank"
		>Lighthouse Moodle page</a
	> for more information
</p>

<Editor bind:content />

<button on:click={() => viewer = !viewer}>Viewer</button>

<div id="app">
	{#if avatar}
		<img class="avatar" src={avatar} alt="d" />
	{/if}
	<button
		on:click={() => {
			fileinput.click();
		}}>Upload</button
	>
	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>
