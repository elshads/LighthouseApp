<script>
	const pageName = 'Lecturers';
	import { session } from '$app/stores';
	import notifications, { loading } from '$src/appStore.js';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '$src/global.js';
	import { Tile, Breadcrumb, BreadcrumbItem, Button, Link } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import Export16 from 'carbon-icons-svelte/lib/Export16';

	let selectedRows;
	let rows;

	const headers = [
		{ key: 'name', value: 'Name' },
		{ key: 'email', value: 'Email' },
		{ key: 'status_name', value: 'Status' },
	];

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

    
	async function loadData() {
		$loading = true;
		try {
			const response = await fetch('/lecturers', {
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
		<BreadcrumbItem href="/lecturers" isCurrentPage>{pageName}</BreadcrumbItem>
	</Breadcrumb>
</Tile>


<DataGrid
	bind:rows
	bind:selectedRows
	{headers}
	searchKeys={['name', 'email']}
	tableClass="lecturers-table"
	linkColumn="1"
    addVisible
    deleteVisible
    on:addClick={() => {}}
    on:deleteClick={() => {}}
    on:linkClick={(e) => notifications.showNotification(true, 'success', e.detail.value.id)}
/>
