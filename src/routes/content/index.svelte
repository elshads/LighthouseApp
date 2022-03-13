<script>
	const pageName = 'Content List';
	import { session } from '$app/stores';
	import notifications, { loading } from '../../appStore.js';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '../../global.js';
	import { Tile, Breadcrumb, BreadcrumbItem, Button, Link } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import Export16 from 'carbon-icons-svelte/lib/Export16';

	let selectedRows;
	let rows;

	const headers = [
		{ key: 'id', value: 'Id' },
		{ key: 'title', value: 'Title' },
		{ key: 'created_by_name', value: 'Creator' },
		{ key: 'sessiontype_name', value: 'Type' },
		{ key: 'sessionstatus_name', value: 'Status' },
		{ key: 'session_start', value: 'Start Date' }
	];

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

	let dataX;
	async function loadData() {
		$loading = true;
		try {
			const response = await fetch('/content', {
				method: 'POST',
				body: JSON.stringify({
					user_id: $session.user.id
				}),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				}
			});
			const data = await response.json();
			if (data.rows.length > 0) {
				rows = data.rows;
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
		$loading = false;
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/content" isCurrentPage>{pageName}</BreadcrumbItem>
	</Breadcrumb>
</Tile>

<div>{JSON.stringify(dataX)}</div>

<DataGrid
	bind:rows
	bind:selectedRows
	{headers}
	searchKeys={['title', 'created_by_name', 'sessiontype_name']}
	size="tall"
	tableClass="contentlist-table"
	linkColumn="2"
	link="/content/"
/>
