<script>
	import config from '$src/config.json';
	import { loading } from '$src/appStore.js';
	import { csvGenerator } from '$src/csvGenerator';
	import {
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		ToolbarBatchActions,
		Link,
		Button,
		Tile,
		Breadcrumb,
		BreadcrumbItem,
		Dropdown
	} from 'carbon-components-svelte';
	import Filter16 from 'carbon-icons-svelte/lib/Filter16';
	import TrashCan16 from 'carbon-icons-svelte/lib/TrashCan16';
	import Export16 from 'carbon-icons-svelte/lib/Export16';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';

	const pageName = 'Users';
	let selectedRowIds;
	let searchValue = '';
	let rows = [];
	let initialRows = [];
	let selectedRows = [];
	let linkColumn = 1;
	let link = '/users/';

	const headers = [
		{ key: 'username', value: 'Email' },
		{ key: 'fullname', value: 'Name' },
		{ key: 'matriculation_no', value: 'Matr. No' },
		{ key: 'email_confirmed', value: 'Confirmed' },
		{ key: 'rolename', value: 'Role' },
		{ key: 'statusname', value: 'Status' }
	];

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

	async function loadData() {
		$loading = true;
		try {
			const response = await fetch('/users', {
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
				initialRows = rows.slice();
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
		$loading = false;
	}

	function searchInput(event) {
		searchValue = event.target.value;

		if (searchValue.length < 1) {
			rows = initialRows;
		} else {
			rows = initialRows.filter(function (e) {
				return (
					e.username?.toLowerCase().includes(searchValue.toLowerCase()) ||
					e.fullname?.toLowerCase().includes(searchValue.toLowerCase()) ||
					e.matriculation_no?.toString().toLowerCase().includes(searchValue.toLowerCase())
				);
			});
		}
	}

	function searchClear(event) {
		searchValue = '';
		rows = initialRows;
	}

	function downloadHandler(data, type) {
		if (data.length > 0) {
			let tableKeys = Object.keys(initialRows[0]);
			csvGenerator(data, tableKeys, tableKeys, `${pageName}_${type}.csv`);
		}
	}

	$: selectedRows = initialRows.filter(function (f) {
		return selectedRowIds.indexOf(f.id) > -1;
	});
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/users" isCurrentPage>Users</BreadcrumbItem>
	</Breadcrumb>
</Tile>

<div class="users-table">
	<DataTable stickyHeader sortable batchSelection bind:selectedRowIds {headers} {rows}>
		<Toolbar>
			<ToolbarBatchActions>
				<Button icon={Export16} on:click={downloadHandler(selectedRows, 'selected')}
					>Export selected</Button
				>
				<Button icon={TrashCan16}>Delete</Button>
			</ToolbarBatchActions>
			<ToolbarContent>
				<ToolbarSearch value={searchValue} on:input={searchInput} on:clear={searchClear} />
				<ToolbarMenu icon={Export16}>
					<ToolbarMenuItem on:click={downloadHandler(initialRows, 'all')}
						>.csv - All rows</ToolbarMenuItem
					>
					<ToolbarMenuItem on:click={downloadHandler(rows, 'filtered')}
						>.csv - Filtered rows</ToolbarMenuItem
					>
				</ToolbarMenu>
			</ToolbarContent>
		</Toolbar>
		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === headers[linkColumn].key}
				<Link href={link + row.id}>
					{cell.value}
				</Link>
			{:else}
				{cell.value}
			{/if}
		</svelte:fragment>
	</DataTable>
</div>
