<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>



<a href='content'>Content link</a>

<button on:click={() => goto('content')}>Content button</button>