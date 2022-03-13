<script>
	const pageName = 'Content';
	import { session, page } from '$app/stores';
	import notifications, { loading } from '../../appStore.js';
	import config from '../../config.json';
	import qrcode from 'qrcode';
	import { v4 as uuidv4 } from 'uuid';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '../../global.js';
	import {
		Tile,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Link,
		TextInput,
		TextArea,
		Form,
		FormGroup,
		Select,
		SelectItem,
		Tag
	} from 'carbon-components-svelte';
	import { DateInput } from 'date-picker-svelte';
	import Editor from '$lib/Editor.svelte';
	import { onMount } from 'svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import AutoComplete from 'simple-svelte-autocomplete';
	import Export16 from 'carbon-icons-svelte/lib/Export16';
	import UserCertification20 from 'carbon-icons-svelte/lib/UserCertification20';
	import QrCode20 from 'carbon-icons-svelte/lib/QrCode20';

	let workshop = {
		id: null,
		title: null,
		description: null,
		content: null,
		session_start: new Date(Date.now() + 1000 * 60 * 60 * 24),
		session_end: new Date(Date.now() + 1000 * 60 * 60 * 25),
		reg_start: new Date(Date.now()),
		reg_end: new Date(Date.now() + 1000 * 60 * 60 * 24),
		points: null,
		sessiontype_id: null,
		sessioncategory_id: null,
		sessionstatus_id: null,
		location_id: null,
		created_on: null,
		created_by: null,
		updated_on: null,
		updated_by: null,
		registration_token: null,
		attendance_token: null,
		lecturers: []
	};

	let sessionstatus;
	let sessiontype;
	let sessioncategory;
	let locations;
	let lecturers;

	let valid_session_start;
	let valid_session_end;
	let valid_reg_start;
	let valid_reg_end;

	$: valid_session_start = valid_session_start && workshop.session_end > workshop.session_start;
	$: valid_session_end = valid_session_end && workshop.session_end > workshop.session_start;

	$: valid_reg_start = valid_reg_start && workshop.reg_end > workshop.reg_start;
	$: valid_reg_end = valid_reg_end && workshop.reg_end > workshop.reg_start;

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

	async function loadData() {
		$loading = true;
		try {
			const response = await fetch('/content/[id]', {
				method: 'POST',
				body: JSON.stringify({
					method: 'select',
					id: $page.params.id,
					user_id: $session.user.id
				}),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				}
			});
			const data = await response.json();
			if (data.status === 200) {
				lecturers = data.lecturers;
				if (data.workshop) {
					workshop.id = data.workshop.id;
					workshop.title = data.workshop.title;
					workshop.description = data.workshop.description;
					workshop.content = data.workshop.content;
					workshop.session_start = new Date(data.workshop.session_start);
					workshop.session_end = new Date(data.workshop.session_end);
					workshop.reg_start = new Date(data.workshop.reg_start);
					workshop.reg_end = new Date(data.workshop.reg_end);
					workshop.points = data.workshop.points;
					workshop.sessiontype_id = data.workshop.sessiontype_id;
					workshop.sessioncategory_id = data.workshop.sessioncategory_id;
					workshop.sessionstatus_id = data.workshop.sessionstatus_id;
					workshop.location_id = data.workshop.location_id;
					workshop.created_on = new Date(data.workshop.created_on);
					workshop.created_by = data.workshop.created_by;
					workshop.updated_on = new Date(data.workshop.updated_on);
					workshop.updated_by = data.workshop.updated_by;
					workshop.registration_token = data.workshop.registration_token;
					workshop.attendance_token = data.attendance_token;

					let selectedLecturerIds = data.workshop.lecturers.map(function (lecturer) {
						return lecturer.id;
					});
					workshop.lecturers = lecturers.filter((lecturer) =>
						selectedLecturerIds.includes(lecturer.id)
					);
				}
				sessionstatus = data.sessionstatus;
				sessiontype = data.sessiontype;
				sessioncategory = data.sessioncategory;
				locations = data.locations;
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
		$loading = false;
	}

	function getSelectedRows(array, rowIds) {
		return array.filter(function (f) {
			return rowIds.indexOf(f.id) > -1;
		});
	}

	async function Save() {
		try {
			if (true) {
				// check form validation
				const response = await fetch('/content/[id]', {
					method: 'POST',
					body: JSON.stringify({
						method: 'insert',
						workshop,
						user_id: $session.user.id
					}),
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json'
					}
				});
				const data = await response.json();
				if (data.status === 200) {
					notifications.showNotification(true, 'warning', data.message);
					await loadData();
				} else {
					notifications.showNotification(true, 'error', data.message);
				}
			} else {
				notifications.showNotification(true, 'error', 'validation error');
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
	}

	// function usersToLecturers() {
	// 	const selectedRows = getSelectedRows(users, selectedUserRowIds);
	// 	users = users.filter(
	// 		(u) =>
	// 			!selectedRows
	// 				.map(function (s) {
	// 					return s.id;
	// 				})
	// 				.includes(u.id)
	// 	);
	// 	lecturers.push(...selectedRows);
	// 	selectedUserRowIds = [];
	// 	selectedLecturerRowIds = [];
	// }

	// function lecturersToUsers() {
	// 	const selectedRows = getSelectedRows(lecturers, selectedLecturerRowIds);
	// 	lecturers = lecturers.filter(
	// 		(u) =>
	// 			!selectedRows
	// 				.map(function (s) {
	// 					return s.id;
	// 				})
	// 				.includes(u.id)
	// 	);
	// 	users.push(...selectedRows);
	// 	selectedUserRowIds = [];
	// 	selectedLecturerRowIds = [];
	// }

	let registrationQrCode = 'empty';
	function generateRegistrationQrCode() {
		qrcode.toString(
			config.appurl + '/workshops/' + uuidv4(),
			{ type: 'svg' },
			function (err, svgurl) {
				let blob = new Blob([svgurl], { type: 'image/svg+xml' });
				let url = URL.createObjectURL(blob);
				registrationQrCode = url;
			}
		);
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/content">Content List</BreadcrumbItem>
		<BreadcrumbItem href={$page.url.pathname} isCurrentPage>{pageName}</BreadcrumbItem>
	</Breadcrumb>
</Tile>

<div class="d-flex right">
	<div class="card py-2 px-3 right">Id: {workshop.id}</div>
</div>

<div>
	<div class="py-3">
		<TextArea
			bind:value={workshop.title}
			rows="1"
			labelText="Title"
			placeholder="Enter title..."
			invalid={!workshop?.title || workshop.title.length < 1}
			invalidText="Mandatory field"
		/>
	</div>

	<div class="py-3">
		<label class="bx--label" for="editor">Content</label>
		<Editor id="editor" bind:content={workshop.content} />
	</div>

	<div class="row">
		<div class="mr-10">
			<div class="session_datetime py-3">
				<div class="d-flex">
					<div>
						<div class="mr-4 date-input">
							<label class="bx--label" for="session-start">Session start</label>
							<DateInput
								id="session-start"
								bind:value={workshop.session_start}
								bind:valid={valid_session_start}
								format="yyyy-MM-dd	HH:mm"
								placeholder="yyyy-mm-dd HH:mm"
							/>
						</div>
					</div>
					<div>
						<div class="date-input">
							<label class="bx--label" for="session-end">Session end</label>
							<DateInput
								id="session-end"
								bind:value={workshop.session_end}
								bind:valid={valid_session_end}
								format="yyyy-MM-dd	HH:mm"
								placeholder="yyyy-mm-dd HH:mm"
							/>
						</div>
					</div>
				</div>
				{#if !valid_session_start || !valid_session_end}
					<div class="invalid-label">Start date must be earlier than end date</div>
				{/if}
			</div>

			<div class="reg_datetime py-3">
				<div class="d-flex">
					<div>
						<div class="mr-4 date-input">
							<label class="bx--label" for="reg-start">Registration start</label>
							<DateInput
								id="reg-start"
								bind:value={workshop.reg_start}
								bind:valid={valid_reg_start}
								format="yyyy-MM-dd	HH:mm"
								placeholder="yyyy-mm-dd HH:mm"
							/>
						</div>
					</div>
					<div>
						<div class="date-input">
							<label class="bx--label" for="reg-end">Registration end</label>
							<DateInput
								id="reg-end"
								bind:value={workshop.reg_end}
								bind:valid={valid_reg_end}
								format="yyyy-MM-dd	HH:mm"
								placeholder="yyyy-mm-dd HH:mm"
							/>
						</div>
					</div>
				</div>
				{#if !valid_session_start || !valid_session_end}
					<div class="invalid-label">Start date must be earlier than end date</div>
				{/if}
			</div>

			<div class="content-select py-3">
				<Select id="select-type" labelText="Type" selected={workshop.sessiontype_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if sessiontype}
						{#each sessiontype as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select id="select-category" labelText="Category" selected={workshop.sessioncategory_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if sessioncategory}
						{#each sessioncategory as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select id="select-location" labelText="Location" selected={workshop.location_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if locations}
						{#each locations as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select id="select-status" labelText="Status" selected={workshop.sessionstatus_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if sessionstatus}
						{#each sessionstatus as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>
		</div>

		<div class="py-3 mr-10" style="max-width: 21rem;">
			<label class="bx--label" for="lecturers">Lecturers</label>
			<AutoComplete
				id="lecturers"
				multiple
				items={lecturers}
				bind:selectedItem={workshop.lecturers}
				valueFieldName="id"
				labelFunction={(lecturer) => lecturer.name + ' ( ' + lecturer.email + ' )'}
				hideArrow
				placeholder="..."
			/>
		</div>
	</div>
	<div class="py-4">
		<Button on:click={Save}>Save</Button>
		<span class="px-3" />
		<Button kind="danger">Delete</Button>
	</div>
</div>
