<script>
	import {
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavLink
	} from 'carbon-components-svelte';
	import {navLinks} from "../data/navLinks";
	import Home20 from 'carbon-icons-svelte/lib/Home20';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let isSideNavOpen = false;

	function navChildren(navLink_id) {
		return navLinks.filter((e) => e.parent_id === navLink_id);
	}

	function goTo(url) {
		if (typeof window !== 'undefined') {
			goto(url);
		}
	}

	let currentPage = [];
	let currentPageParentId = 0;
	$: currentPage = navLinks.filter((e) => $page.url.pathname.includes(e.href));
	$: currentPageParentId = currentPage.length > 0 ? currentPage[0].parent_id ? currentPage[0].parent_id : 0 : 0
</script>


<SideNav bind:isOpen={isSideNavOpen} rail>
	<SideNavItems>
		<SideNavLink icon={Home20} text="Home" href="/" isSelected={$page.url.pathname === '/'} />
		{#each navLinks as navLink}
			{#if !navLink.parent_id && navChildren(navLink.id).length > 0}
				<SideNavMenu
					icon={navLink.icon}
					text={navLink.text}
					class={currentPageParentId === navLink.id ? "selectedmenu" : ""}
				>
					{#each navChildren(navLink.id) as child}
						<SideNavLink
							class="submenu-item"
							icon={child.icon}
							text={child.text}
							href={child.href}
							target={child.newtab ? '_blank' : ''}
							isSelected={$page.url.pathname.includes(child.href)}
						/>
					{/each}
				</SideNavMenu>
			{:else if !navLink.parent_id && navChildren(navLink.id).length === 0}
				<SideNavLink
					icon={navLink.icon}
					text={navLink.text}
					href={navLink.href}
					target={navLink.newtab ? '_blank' : ''}
					isSelected={$page.url.pathname.includes(navLink.href)}
				/>
			{/if}
		{/each}
	</SideNavItems>
</SideNav>
