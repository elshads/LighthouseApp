<script>
	import config from '../config.json';
	import { session } from '$app/stores';
	import notifications from '../appStore.js';
	import { ComboBox, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';
	import { onMount } from 'svelte';
	import Editor from '$lib/Editor.svelte';
	import Viewer from '$lib/Viewer.svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import qrcode from 'qrcode';

	let avatar, fileinput;
	let content;
	let rows = [];
	let headers = [];
	let selectedRowIds;
	let viewer = false;

	let image;
	onMount(() => {
		qrcode.toString(config.appurl, { type: 'svg' }, function (err, svgurl) {
			let blob = new Blob([svgurl], { type: 'image/svg+xml' });
			let url = URL.createObjectURL(blob);
			image = url;
		});
	});
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

<div>{JSON.stringify(content)}</div>
