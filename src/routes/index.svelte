<script>
	import { session } from '$app/stores';
	import notifications from '../appStore.js';
	import { ComboBox, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';
	import { onMount } from 'svelte';
	import Tiptap from '$lib/Tiptap.svelte';

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


<Tiptap></Tiptap>
