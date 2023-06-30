<script>
	import PageContainer from '$lib/components/page-container.svelte';
	import { title } from '$lib/config';
</script>

<svelte:head>
	<title>{title('Admin')}</title>
	<meta name='description' content='Admin panel' />
</svelte:head>

<PageContainer size='small'>
	hi
</PageContainer>
