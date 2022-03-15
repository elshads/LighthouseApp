<script>
	const pageName = 'Activities';
	import { session } from '$app/stores';
	import notifications, { loading } from '$src/appStore.js';
	import { Accordion, AccordionItem, Button } from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<h1 class="pb-8">Placeholder</h1>

<Accordion align="start">
	<AccordionItem>
		<svelte:fragment slot="title">
			<div>Stage 1</div>
		</svelte:fragment>
		<p>
			Natural Language Classifier uses advanced natural language processing and machine learning
			techniques to create custom classification models. Users train their data and the service
			predicts the appropriate category for the inputted text.
		</p>
	</AccordionItem>
	<AccordionItem>
        <svelte:fragment slot="title">
			<div>Stage 2</div>
		</svelte:fragment>
		<p>
			Analyze text to extract meta-data from content such as concepts, entities, emotion, relations,
			sentiment and more.
		</p>
	</AccordionItem>
	<AccordionItem>
        <svelte:fragment slot="title">
			<div>Stage 3</div>
		</svelte:fragment>
		<p>
			Translate text, documents, and websites from one language to another. Create industry or
			region-specific translations via the service's customization capability.
		</p>
	</AccordionItem>
</Accordion>
