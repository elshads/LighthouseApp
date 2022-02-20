<script>
	const pageName = 'Workshops';
	import { session } from '$app/stores';
	import notifications, { loading } from '../../appStore.js';
	import { Accordion, AccordionItem, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';

	let workshops = [
		{
			id: 1,
			title:
				'Open Talk: Introduction of Lighthouse, university services (equality mentors and other services), Culture, DOs & Donts in Germany & open discussion',
			description: "<h3>Description goes here</h3> <a href='http://192.168.0.171:8080/users'>http://192.168.0.171:8080/users</a>",
			session_start: new Date('2022-04-07T15:00'),
			session_end: new Date('2022-04-07T16:30'),
			reg_start: new Date('2022-04-01T15:00'),
			reg_end: new Date('2022-04-07T15:00'),
			points: 90,
            lecturers: ['V. Wulfhorst', 'A. Shahriar'],
			category: 'Study',
            location: 'Online',
            visible: true,
			status: 'Active'
		}
	];
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<h1 class="pb-8">Placeholder</h1>

<Accordion align="start" size="xl">
	<AccordionItem>
		<svelte:fragment slot="title">
			<div class="row between">
				<h6>Stage 1</h6>
				<h6>Status:</h6>
				<h6>Active</h6>
			</div>
		</svelte:fragment>
		<p>Description</p>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="title">
			<h6>Stage 2</h6>
		</svelte:fragment>
		<p>Description</p>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="title">
			<h6>Stage 3</h6>
		</svelte:fragment>
		<p>Description</p>
	</AccordionItem>
</Accordion>
