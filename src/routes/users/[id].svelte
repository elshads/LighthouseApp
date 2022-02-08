<script>
	import { Tile, Breadcrumb, BreadcrumbItem } from 'carbon-components-svelte';
	const pageName = 'User';
</script>

<svelte:head>
	<title>Lighthouse - {pageName}</title>
</svelte:head>

<Tile class="tile">
	<Breadcrumb noTrailingSlash>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/users">Users</BreadcrumbItem>
		<BreadcrumbItem href="/users/[id]" isCurrentPage>User</BreadcrumbItem>
	</Breadcrumb>
</Tile>

<div>User card</div>
