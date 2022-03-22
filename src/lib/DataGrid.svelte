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
		Link,
		Modal
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
	export let link = null;
	export let searchKeys = [];
	export let exportVisible = true;
	export let addVisible = false;
	export let deleteVisible = false;

	const dispatch = createEventDispatcher();

	async function addHandler() {
		dispatch('addClick');
	}

	async function deleteHandler() {
		dispatch('deleteClick');
	}

	async function linkClickHandler(value) {
		dispatch('linkClick', { value: value });
	}

	let initialRows = [];
	let searchValue = '';
	let filtering = false;
	let deleteModalOpen = false;

	function searchInput(event) {
		filtering = true;
		searchValue = event.target.value;

		if (searchValue.length < 1) {
			rows = initialRows;
		} else {
			rows = initialRows.filter(function (e) {
				const keys = searchKeys.length > 0 ? searchKeys : headers.map(function (item) { return item.key; });
				const count = keys.length;
				for (let i = 0; i < count; i++) {
					const result = e[keys[i]]?.toString().toLowerCase().includes(searchValue.toLowerCase());
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
			csvGenerator(data, tableKeys, tableKeys, `export_${type}.csv`);
		}
	}

	$: if (filtering === false) {
		initialRows = rows.slice();
	}

	$: if (initialRows.length > 0) {
		selectedRows = initialRows.filter(function (f) {
			return selectedRowIds.indexOf(f.id) > -1;
		});
	}
</script>

<div class="datagrid">
	<div class={tableClass}>
		<DataTable stickyHeader sortable batchSelection bind:selectedRowIds {headers} bind:rows {size}>
			<Toolbar>
				<ToolbarBatchActions>
					{#if exportVisible === true}
						<Button icon={Export16} on:click={downloadHandler(selectedRows, 'selected')}
							>Export selected</Button
						>
					{/if}
					{#if deleteVisible === true}
						<Button on:click={() => (deleteModalOpen = true)} icon={TrashCan16}>Delete</Button>
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
					{#if addVisible === true}
						<Button on:click={addHandler} icon={Add16}>Add</Button>
					{/if}
				</ToolbarContent>
			</Toolbar>
			<svelte:fragment slot="cell" let:row let:cell>
				{#if headers && linkColumn > -1 && linkColumn <= headers.length && cell.key === headers[linkColumn - 1].key}
					{#if link !== null}
						<Link href={link + row.id}>
							{cell.value}
						</Link>
					{:else}
						<button class="bx--link link-button" on:click={linkClickHandler(row)}>
							{cell.value}
						</button>
					{/if}
				{:else if cell.key === 'session_start'}
					{formatDateTime(new Date(cell.value))}
				{:else if cell.key === 'reg_start'}
					{(new Date(row.reg_start) <= new Date(Date.now()) && new Date(row.reg_end) >= new Date(Date.now())) ? "Open" : "Closed"}
				{:else}
					{cell.value}
				{/if}
			</svelte:fragment>
		</DataTable>
	</div>
</div>

<Modal
	danger
	bind:open={deleteModalOpen}
	modalHeading="Delete"
	primaryButtonText="Delete"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (deleteModalOpen = false)}
	on:open
	on:close
	on:submit={() => {
		deleteHandler();
		deleteModalOpen = false;
	}}
>
	<p>Are you sure you want to delete selected {selectedRowIds.length} item(s)?</p>
</Modal>

<style>
	.link-button {
		align-items: center;
		padding: 0;
		border: 0;
		appearance: none;
		background: none;
		cursor: pointer;
		width: 100%;
		height: 100%;
	}

	.bx--link:active,
	.bx--link:active:visited,
	.bx--link:active:visited:hover {
		color: var(--cds-text-01, #161616);
		text-decoration: none;
	}

	.bx--link:focus {
		outline: none;
	}
</style>
