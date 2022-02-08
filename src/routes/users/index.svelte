<script>
	import config from '../../config.json';
	import {loading} from '../../appStore.js';
	import { csvGenerator } from '../../csvGenerator';
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

	const pageName = "Users";
	let selectedRowIds;
	let searchValue = '';
	let rows = [];
	let initialRows = [];
	let selectedRows = [];

	const headers = [
		{ key: 'email', value: 'Email' },
		{ key: 'fullname', value: 'Name' },
		{ key: 'matriculation_no', value: 'Matr. No' },
		{ key: 'email_confirmed', value: 'Confirmed' },
		{ key: 'rolename', value: 'Role' },
		{ key: 'statusname', value: 'Status' }
	];

	onMount(async () => {
		$loading = true;
		await fetch(`${config.apiserver}/api/users`)
			.then((response) => response.json())
			.then((data) => {
				rows = data.data;
				initialRows = rows.slice();
			})
			.catch(err => {
				console.log(err.message);
			});
		$loading = false;
	});

	function searchInput(event) {
		searchValue = event.target.value;

		if (searchValue.length < 1) {
			rows = initialRows;
		} else {
			rows = initialRows.filter(function (e) {
				return (
					e.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
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
		if(data.length > 0){
			let tableKeys = Object.keys(initialRows[0]);
		csvGenerator(data, tableKeys, tableKeys, `${pageName}_${type}.csv`);
		}
	}

	$: selectedRows = initialRows.filter(function(f){
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
				<Button icon={Export16} on:click={downloadHandler(selectedRows, "selected")}>Export selected</Button>
				<Button icon={TrashCan16}>Delete</Button>
			</ToolbarBatchActions>
			<ToolbarContent>
				<ToolbarSearch value={searchValue} on:input={searchInput} on:clear={searchClear} />
				<ToolbarMenu icon={Export16} >
					<ToolbarMenuItem on:click={downloadHandler(initialRows, "all")}>.csv - All rows</ToolbarMenuItem>
					<ToolbarMenuItem on:click={downloadHandler(rows, "filtered")}>.csv - Filtered rows</ToolbarMenuItem>
				</ToolbarMenu>
			</ToolbarContent>
		</Toolbar>
		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === 'email'}
				<Link href="/users/{row.id}">
					{cell.value}
				</Link>
			{:else}
				{cell.value}
			{/if}
		</svelte:fragment>
	</DataTable>
</div>

