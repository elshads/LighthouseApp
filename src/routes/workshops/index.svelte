<script>
	const pageName = 'Workshops';
	import { session } from '$app/stores';
	import notifications, { loading } from '$src/appStore.js';
	import Viewer from '$lib/Viewer.svelte';
	import { formatDateTime, formatDate, formatTime, toProperCase } from '$src/global.js';
	import {
		Accordion,
		AccordionItem,
		Button,
		FormItem,
		Tile,
		Breadcrumb,
		BreadcrumbItem
	} from 'carbon-components-svelte';
	import { GaugeChart, DonutChart, RadarChart } from '@carbon/charts-svelte';
	import CircleFilled16 from 'carbon-icons-svelte/lib/CircleFilled16';
	import Time16 from 'carbon-icons-svelte/lib/Time16';
	import Calendar16 from 'carbon-icons-svelte/lib/Calendar16';
	import EventSchedule16 from 'carbon-icons-svelte/lib/EventSchedule16';
	import Badge16 from 'carbon-icons-svelte/lib/Badge16';
	import UserSpeaker16 from 'carbon-icons-svelte/lib/UserSpeaker16';
	import Category16 from 'carbon-icons-svelte/lib/Category16';
	import Location16 from 'carbon-icons-svelte/lib/Location16';

	import {onMount} from 'svelte';

	const success = '#42be65';
	const fail = '#da1e28';
	const neutral = '';
	let workshopList = [];

	onMount(async () => {
		$loading = true;
		await loadData();
		$loading = false;
	});

	
	async function loadData() {
		$loading = true;
		try {
			const response = await fetch('/workshops', {
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
				workshopList = data.rows;
			} else {
				notifications.showNotification(true, 'error', data.message);
			}
		} catch (err) {
			notifications.showNotification(true, 'error', 'comp other err: ' + err.message);
		}
		$loading = false;
	}

	function register(id, status) {
		let index = workshopList.findIndex((e) => e.id === id);
		if (status === 1) {
			workshopList[index].sessionstatus_id = 0;
			workshopList[index].sessionstatus_name = 'Not Registered';
		}
		else if (status === 0){
		workshopList[index].sessionstatus_id = 1;
		workshopList[index].sessionstatus_name = 'Registered';
		}
	}

	
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/workshops" isCurrentPage>Workshops</BreadcrumbItem>
	</Breadcrumb>
</Tile>

<h1 class="pb-8">Workshops</h1>

{#if workshopList}
	<Accordion align="start" size="xl">
		{#each workshopList as item}
			<AccordionItem>
				<svelte:fragment slot="title">
					<div class="row between top">
						<h6 class="col-8">{item.title}</h6>
						<div class="col-4">
							<div class="row right">
								<h6 class="ml-2 mr-4">{formatDateTime(new Date(item.session_start))}</h6>
								<h6 class="mr-4">UserRegisStatus</h6>
								<CircleFilled16 style="fill: {false ? success : fail}" />
							</div>
						</div>
					</div>
				</svelte:fragment>
				<div class="row between top">
					<div class="col-8">
						<Viewer content={item.content} />
					</div>
					<div class="col-4 col-width text-right">
						<div class="d-flex right center-y">
							<p class="ml-2 mr-4">
								<span class="color-primary">Start date: </span>{formatDate(new Date(item.session_start))}
							</p>
							<Calendar16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4">
								<span class="color-primary">Duration: </span>{formatTime(new Date(item.session_start))} - {formatTime(new Date(item.session_end))}
							</p>
							<Time16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4">
								<span class="color-primary">Reg. end: </span>{formatDateTime(new Date(item.reg_end))}
							</p>
							<EventSchedule16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4"><span class="color-primary">Points: </span>{item.points}</p>
							<Badge16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4"><span class="color-primary">Category: </span>{item.sessioncategory_name}</p>
							<Category16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4"><span class="color-primary">Location: </span>{item.location_name}</p>
							<Location16 />
						</div>
						{#if item.lecturers}
							<div class="d-flex right center-y mt-2">
								<h6 class="ml-2 mr-4"><span class="color-primary">Lecturer(s)</span></h6>
								<UserSpeaker16 />
							</div>
							{#each item.lecturers as lecturer}
								<p class="mt-2 mr-8">{lecturer}</p>
							{/each}
						{/if}
						<div class="right center-y mt-4">
							<Button
								kind={item.sessionstatus_id > 0 ? 'danger' : 'primary'}
								disabled={!(new Date(item.reg_start) <= new Date(Date.now()) && new Date(item.reg_end) >= new Date(Date.now())) }
								on:click={() => register(item.id, item.sessionstatus_id)}
								>{item.sessionstatus_id > 0 ? 'Deregister' : 'Register'}</Button
							>
						</div>
					</div>
				</div>
			</AccordionItem>
		{/each}
	</Accordion>
{/if}

<style>
	.col-width {
		min-width: 16.25rem;
	}
</style>
