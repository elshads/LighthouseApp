<script>
	import { session } from '$app/stores';
	import { csvGenerator } from '../csvGenerator';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '../global.js';
	import { onMount, createEventDispatcher, tick } from 'svelte';
	import {
		Button,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		ToolbarBatchActions,
		Link
	} from 'carbon-components-svelte';
	import Export16 from 'carbon-icons-svelte/lib/Export16';
	import TrashCan16 from 'carbon-icons-svelte/lib/TrashCan16';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import notifications from '../appStore.js';

	export let selectedRowIds = [];
	export let selectedRows = [];
	export let rows = [];
	export let headers;
	export let size = 'medium';
	export let tableClass = 'data-table';
	export let linkColumn = -1;
	export let link = '';
	export let searchKeys = ['name'];
	export let exportVisible = true;
	export let addVisible = false;
	export let deleteVisible = false;

	const dispatch = createEventDispatcher();

	async function addHandler() {
		dispatch('addAction');
	}

	async function deleteHandler() {
		dispatch('deleteAction');
	}

	let initialRows = [];
	let searchValue = '';
	let filtering = false;

	function searchInput(event) {
		filtering = true;
		searchValue = event.target.value;

		if (searchValue.length < 1) {
			rows = initialRows;
		} else {
			rows = initialRows.filter(function (e) {
				const count = searchKeys.length;
				for (let i = 0; i < count; i++) {
					const result = e[searchKeys[i]]?.toLowerCase().includes(searchValue.toLowerCase());
					if (result) {
						return result;
					}
				}
				return false;
			});
		}
	}

	function searchClear(event) {
		searchValue = '';
		rows = initialRows;
		filtering = false;
	}

	function downloadHandler(data, type) {
		if (data.length > 0) {
			let tableKeys = Object.keys(initialRows[0]);
			csvGenerator(data, tableKeys, tableKeys, `${pageName}_${type}.csv`);
		}
	}

	$: if (filtering === false) {initialRows = rows.slice()};

	$: if (initialRows.length > 0) {
		selectedRows = initialRows.filter(function (f) {
			return selectedRowIds.indexOf(f.id) > -1;
		});
	}

</script>


<div class={tableClass}>
	<DataTable stickyHeader sortable batchSelection bind:selectedRowIds {headers} bind:rows {size}>
		<Toolbar>
			<ToolbarBatchActions>
				{#if exportVisible === true}
					<Button icon={Export16} on:click={downloadHandler(selectedRows, 'selected')}
						>Export selected</Button
					>
				{/if}
				{#if addVisible === true}
					<Button on:click={addHandler} icon={Add16}>Add</Button>
				{/if}
				{#if deleteVisible === true}
					<Button on:click={deleteHandler} icon={TrashCan16}>Delete</Button>
				{/if}
			</ToolbarBatchActions>
			<ToolbarContent>
				<div class="toolbar-item"><div>Rows: {rows.length}</div></div>
				<ToolbarSearch value={searchValue} on:input={searchInput} on:clear={searchClear} />
				{#if exportVisible === true}
					<ToolbarMenu icon={Export16}>
						<ToolbarMenuItem on:click={downloadHandler(initialRows, 'all')}
							>.csv - All rows</ToolbarMenuItem
						>
						<ToolbarMenuItem on:click={downloadHandler(rows, 'filtered')}
							>.csv - Filtered rows</ToolbarMenuItem
						>
					</ToolbarMenu>
				{/if}
			</ToolbarContent>
		</Toolbar>
		<svelte:fragment slot="cell" let:row let:cell>
			{#if headers && linkColumn > -1 && linkColumn <= headers.length && cell.key === headers[linkColumn - 1].key}
				<Link href={link + row.id}>
					{cell.value}
				</Link>
			{:else if cell.key === 'session_start'}
				{formatDateTime(new Date(cell.value))}
			{:else}
				{cell.value}
			{/if}
		</svelte:fragment>
	</DataTable>
</div>
