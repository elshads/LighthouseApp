<script>
	import {
		open,
		inline,
		kind,
		subtitle,
		caption,
		actionButton,
		action
	} from '../appStore';
	import {toProperCase} from "../global"
	import {
		InlineNotification,
		ToastNotification,
		NotificationActionButton
	} from 'carbon-components-svelte';

	let timeout = 6000;

</script>

{#if $open}
	{#if $inline}
		<InlineNotification
			lowContrast="false;"
			{timeout}
			kind={$kind.toLowerCase()}
			title={`${toProperCase($kind)}:`}
			subtitle={$subtitle}
			on:close={() => $open = false}
		>
			<svelte:fragment slot="actions">
				{#if $action}
					<NotificationActionButton on:click={$action}>{$actionButton}</NotificationActionButton>
				{/if}
			</svelte:fragment>
		</InlineNotification>
	{:else}
		<ToastNotification
			lowContrast="false;"
			{timeout}
			kind={$kind.toLowerCase()}
			title={`${toProperCase($kind)}:`}
			subtitle={$subtitle}
			caption={$caption}
			on:close={() => $open = false}
		/>
	{/if}
{/if}
