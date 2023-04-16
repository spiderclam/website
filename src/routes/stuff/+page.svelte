<script>
	import PageContainer from '$lib/components/page-container.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<PageContainer title="Stuff">
	<p>🚧 Not quite there yet.</p>

	<p>This is where I'll (eventually) upload assets and other resources.</p>
</PageContainer>
