<script>
	const pageName = 'Content List';
	import { session } from '$app/stores';
	import notifications, { loading } from '$src/appStore.js';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '$src/global.js';
	import { Tile, Breadcrumb, BreadcrumbItem, Button, Link } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import Export16 from 'carbon-icons-svelte/lib/Export16';
	import { goto } from '$app/navigation';

	let selectedRows;
	let rows;
	let deletedIds = [];

	const headers = [
		{ key: 'id', value: 'Id' },
		{ key: 'title', value: 'Title' },
		{ key: 'created_by_name', value: 'Creator' },
		{ key: 'sessiontype_name', value: 'Type' },
		{ key: 'sessionstatus_name', value: 'Status' },
		{ key: 'reg_start', value: 'Registration' },
		{ key: 'session_start', value: 'Start Date' },
	];

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

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

	async function deleteRows() {
		deletedIds = selectedRows.map(function (item) {
			return item.id;
		});
		const response = await fetch('/content', {
					method: 'DELETE',
					body: JSON.stringify({
						deleted_ids: deletedIds,
						user_id: $session.user.id
					}),
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json'
					}
				});
				const data = await response.json();
				if (data.message === undefined) {
					await loadData();
				} else {
					notifications.showNotification(true, 'error', data.message);
				}
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

<DataGrid
	bind:rows
	bind:selectedRows
	{headers}
	tableClass="contentlist-table"
	linkColumn="2"
	link="/content/"
	addVisible
	deleteVisible
	on:addClick={() => goto('content/0')}
	on:deleteClick={() => deleteRows()}
/>
