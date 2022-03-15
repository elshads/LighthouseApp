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
	import Badge16 from 'carbon-icons-svelte/lib/Badge16';
	import UserSpeaker16 from 'carbon-icons-svelte/lib/UserSpeaker16';
	import Category16 from 'carbon-icons-svelte/lib/Category16';
	import Location16 from 'carbon-icons-svelte/lib/Location16';

	import { content } from './test';

	const success = '#42be65';
	const fail = '#da1e28';
	const neutral = '';

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

	let workshopList = [
		{
			id: 1,
			title: 'Workshop 1 Title',
			sessionstatus_id: 1,
			sessionstatus_name: 'Registered',
			session_start: new Date('2022-02-23 15:00'),
			session_end: new Date('2022-02-23 16:30'),
			points: 90,
			sessioncategory_name: 'Equality',
			location_name: 'Online'
		},
		{
			id: 2,
			title: 'Workshop 2 Title',
			sessionstatus_id: 0,
			sessionstatus_name: 'Not Registered',
			session_start: new Date('2022-02-24 12:00'),
			session_end: new Date('2022-02-24 14:00'),
			points: 120,
			sessioncategory_name: 'Career',
			location_name: 'Online'
		}
	];
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
								<h6 class="ml-2 mr-4">{formatDateTime(item.session_start)}</h6>
								<h6 class="mr-4">{item.sessionstatus_name}</h6>
								<CircleFilled16 style="fill: {item.sessionstatus_id > 0 ? success : fail}" />
							</div>
						</div>
					</div>
				</svelte:fragment>
				<div class="row between top">
					<div class="col-8">
						<!-- <p class="multiline">{item.description}</p> -->
						<Viewer {content} />
					</div>
					<div class="col-4 col-width text-right">
						<div class="d-flex right center-y">
							<p class="ml-2 mr-4">
								Duration: {formatTime(item.session_start)} - {formatTime(item.session_end)}
							</p>
							<Time16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4">Points: {item.points}</p>
							<Badge16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4">Category: {item.sessioncategory_name}</p>
							<Category16 />
						</div>
						<div class="d-flex right center-y mt-2">
							<p class="ml-2 mr-4">Location: {item.location_name}</p>
							<Location16 />
						</div>
						{#if item.lecturers}
							<div class="d-flex right center-y mt-2">
								<h6 class="ml-2 mr-4">Lecturer(s)</h6>
								<UserSpeaker16 />
							</div>
							{#each item.lecturers as lecturer}
								<p class="mt-2 mr-8">{lecturer}</p>
							{/each}
						{/if}
						<div class="right center-y mt-4">
							<Button
								kind={item.sessionstatus_id > 0 ? 'danger' : 'primary'}
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
