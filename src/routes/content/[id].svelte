<script>
	const pageName = 'Content';
	import { session, page } from '$app/stores';
	import notifications, { loading } from '$src/appStore.js';
	import config from '$src/config.json';
	import qrcode from 'qrcode';
	import { v4 as uuidv4 } from 'uuid';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '$src/global.js';
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
		Tag,
		NumberInput,
		Modal,
		DataTable,
		ImageLoader
	} from 'carbon-components-svelte';
	import { DateInput } from 'date-picker-svelte';
	import Editor from '$lib/Editor.svelte';
	import { onMount } from 'svelte';
	import DataGrid from '$lib/DataGrid.svelte';
	import AutoComplete from 'simple-svelte-autocomplete';
	import Export16 from 'carbon-icons-svelte/lib/Export16';
	import UserCertification20 from 'carbon-icons-svelte/lib/UserCertification20';
	import QrCode20 from 'carbon-icons-svelte/lib/QrCode20';
	import Save16 from 'carbon-icons-svelte/lib/Save16';
	import TrashCan16 from 'carbon-icons-svelte/lib/TrashCan16';
	import UserMultiple16 from 'carbon-icons-svelte/lib/UserMultiple16';
	import QrCode16 from 'carbon-icons-svelte/lib/QrCode16';
	import Email16 from 'carbon-icons-svelte/lib/Email16';
	import { goto } from '$app/navigation';

	let workshop = {
		id: 0,
		title: null,
		description: null,
		content: null,
		session_start: new Date(Date.now() + 1000 * 60 * 60 * 24),
		session_end: new Date(Date.now() + 1000 * 60 * 60 * 25),
		reg_start: new Date(Date.now()),
		reg_end: new Date(Date.now() + 1000 * 60 * 60 * 24),
		points: 0,
		sessiontype_id: 0,
		sessioncategory_id: 0,
		sessionstatus_id: 0,
		location_id: 1,
		created_on: new Date(Date.now()),
		created_by: 0,
		updated_on: new Date(Date.now()),
		updated_by: 0,
		registration_token: null,
		attendance_token: null,
		lecturers: []
	};

	let sessionstatus;
	let sessiontype;
	let sessioncategory;
	let locations;
	let lecturers;

	let deleteModalOpen = false;
	let regUsersModalOpen = false;
	let registrationQrModalOpen = false;
	let attendanceQrModalOpen = false;

	let regUsersHeaders = [
		{ key: 'fullname', value: 'Name' },
		{ key: 'username', value: 'Username' }
	];
	let registered_users = [];

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
				sessionstatus = data.sessionstatus;
				sessiontype = data.sessiontype;
				sessioncategory = data.sessioncategory;
				locations = data.locations;
				registered_users = data.registered_users;
				if (data.workshop) {
					workshop.id = data.workshop.id === undefined ? workshop.id : data.workshop.id;
					workshop.title = data.workshop.title;
					workshop.description = data.workshop.description;
					workshop.content = data.workshop.content;
					workshop.session_start =
						data.workshop.session_start === undefined
							? workshop.session_start
							: new Date(data.workshop.session_start);
					workshop.session_end =
						data.workshop.session_end === undefined
							? workshop.session_end
							: new Date(data.workshop.session_end);
					workshop.reg_start =
						data.workshop.reg_start === undefined
							? workshop.reg_start
							: new Date(data.workshop.reg_start);
					workshop.reg_end =
						data.workshop.reg_end === undefined
							? workshop.reg_end
							: new Date(data.workshop.reg_end);
					workshop.points =
						data.workshop.points === undefined ? workshop.points : data.workshop.points;
					workshop.sessiontype_id =
						data.workshop.sessiontype_id === undefined
							? sessiontype !== undefined && sessiontype.length > 0
								? sessiontype[0].id
								: workshop.sessiontype_id
							: data.workshop.sessiontype_id;
					workshop.sessioncategory_id =
						data.workshop.sessioncategory_id === undefined
							? sessioncategory !== undefined && sessioncategory.length > 0
								? sessioncategory[0].id
								: workshop.sessioncategory_id
							: data.workshop.sessioncategory_id;
					workshop.sessionstatus_id =
						data.workshop.sessionstatus_id === undefined
							? sessionstatus !== undefined && sessionstatus.length > 0
								? sessionstatus[0].id
								: workshop.sessionstatus_id
							: data.workshop.sessionstatus_id;
					workshop.location_id =
						data.workshop.location_id === undefined || data.workshop.location_id < 0
							? location !== undefined && location.length > 0
								? location[0].id
								: workshop.location_id
							: data.workshop.location_id;
					workshop.created_on = new Date(data.workshop.created_on);
					workshop.created_by =
						data.workshop.created_by === undefined ? $session.user.id : data.workshop.created_by;
					workshop.updated_on = new Date(data.workshop.updated_on);
					workshop.updated_by =
						data.workshop.updated_by === undefined ? $session.user.id : data.workshop.updated_by;
					workshop.registration_token = data.workshop.registration_token;
					workshop.attendance_token = data.workshop.attendance_token;

					getRegistrationQrCodeUrl();
					getAttendanceQrCodeUrl();

					let selectedLecturerIds = data.workshop.lecturers.map(function (lecturer) {
						return lecturer.id;
					});
					workshop.lecturers = lecturers.filter((lecturer) =>
						selectedLecturerIds.includes(lecturer.id)
					);
				}
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
			if (valid_session_start && valid_session_end && valid_reg_start && valid_reg_end) {
				// check form validation
				const response = await fetch('/content/[id]', {
					method: 'POST',
					body: JSON.stringify({
						method: workshop.id > 0 ? 'update' : 'insert',
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
					if (workshop.id < 1) {
						goto(`/content/${data.result.id}`);
					} else {
						await loadData(`/content/${data.result.id}`);
					}
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

	let registrationQrCodeUrl;
	let attendanceQrCodeUrl;
	function getRegistrationQrCodeUrl() {
		qrcode.toString(
			config.appurl + '/workshops/registration/' + workshop.registration_token,
			{ type: 'svg' },
			function (err, svgurl) {
				let blob = new Blob([svgurl], { type: 'image/svg+xml' });
				let url = URL.createObjectURL(blob);
				registrationQrCodeUrl = url;
			}
		);
	}

	function getAttendanceQrCodeUrl() {
		qrcode.toString(
			config.appurl + '/workshops/attendance/' + workshop.attendance_token,
			{ type: 'svg' },
			function (err, svgurl) {
				let blob = new Blob([svgurl], { type: 'image/svg+xml' });
				let url = URL.createObjectURL(blob);
				attendanceQrCodeUrl = url;
			}
		);
	}

	async function deleteHandler() {
		if (workshop.id > 0) {
			const response = await fetch('/content/[id]', {
				method: 'DELETE',
				body: JSON.stringify({
					deleted_id: deletedId,
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
	}
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<div class="center-y">
		<div class="mr-8">
			<Breadcrumb noTrailingSlash>
				<BreadcrumbItem href="/">Home</BreadcrumbItem>
				<BreadcrumbItem href="/content">Content List</BreadcrumbItem>
				<BreadcrumbItem href={$page.url.pathname} isCurrentPage>{pageName}</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="tile-button">
			<Button class="mx-2" icon={Save16} on:click={Save}>Save</Button>
			<Button
				class="mx-2"
				kind="danger"
				disabled={workshop.id === undefined || workshop.id < 1}
				icon={TrashCan16}
				on:click={() => (deleteModalOpen = true)}>Delete</Button
			>
			<Button
				class="mx-2"
				kind="tertiary"
				icon={UserMultiple16}
				on:click={() => (regUsersModalOpen = true)}>Registered Users</Button
			>
			<Button class="mx-2" kind="tertiary" icon={QrCode16} on:click={() => (registrationQrModalOpen = true)}>Registration QR</Button>
			<Button class="mx-2" kind="tertiary" icon={QrCode16} on:click={() => (attendanceQrModalOpen = true)}>Attendance QR</Button>
		</div>
	</div>
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
				<NumberInput label="Points" bind:value={workshop.points} />
			</div>

			<div class="content-select py-3">
				<Select id="select-type" labelText="Type" bind:selected={workshop.sessiontype_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if sessiontype}
						{#each sessiontype as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select
					id="select-category"
					labelText="Category"
					bind:selected={workshop.sessioncategory_id}
				>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if sessioncategory}
						{#each sessioncategory as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select id="select-location" labelText="Location" bind:selected={workshop.location_id}>
					<SelectItem disabled hidden value="-1" text="Choose an option" />
					{#if locations}
						{#each locations as item}
							<SelectItem value={item.id} text={item.name} />
						{/each}
					{/if}
				</Select>
			</div>

			<div class="content-select py-3">
				<Select id="select-status" labelText="Status" bind:selected={workshop.sessionstatus_id}>
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
	<p>Are you sure you want to delete current item?</p>
</Modal>

<Modal passiveModal bind:open={regUsersModalOpen} modalHeading="Registered Users" on:open on:close>
	<p>Rows: {registered_users.length}</p>
	<DataTable headers={regUsersHeaders} rows={registered_users} />
</Modal>

<Modal passiveModal bind:open={registrationQrModalOpen} modalHeading="Registration QR" on:open on:close>
	<ImageLoader src={registrationQrCodeUrl} alt="" height="300"/>
	<p>URL: {config.appurl + '/workshops/registration/' + workshop.registration_token}</p>
</Modal>

<Modal passiveModal bind:open={attendanceQrModalOpen} modalHeading="Attendance QR" on:open on:close>
	<ImageLoader src={attendanceQrCodeUrl} alt="" height="300"/>
	<p>URL: {config.appurl + '/workshops/attendance/' + workshop.attendance_token}</p>
	<div class="d-flex w-100 right">
		<Button class="my-4" kind="tertiary" icon={Email16} on:click={() => notifications.showNotification(true, 'success', 'placeholder function for sending email')}>Send to the lecturer(s)</Button>
	</div>
</Modal>
