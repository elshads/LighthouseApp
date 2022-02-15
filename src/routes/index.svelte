<script>
	import { session } from '$app/stores';
	import notifications from '../appStore.js';
	import { ComboBox, Button } from 'carbon-components-svelte';
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

<p>{JSON.stringify($session)}</p>

<ComboBox
	placeholder="Select contact method"
	items={[
		{ id: '0', text: 'Slack' },
		{ id: '1', text: 'Email' },
		{ id: '2', text: 'Fax' }
	]}
/>

<Button
	kind="danger"
	on:click={() => notifications.showNotification(true, 'error', 'Error Message', 'Click here')}
	>Error</Button
>
<Button
	kind="primary"
	>Success</Button
>
