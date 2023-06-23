<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Spiderclam's gallery" />
</svelte:head>

<PageContainer title="Gallery" size='huge'>
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each data.gallery as item}
				<a href={`gallery/${item.slug}`} class='relative shadow-sm hover:shadow-lg'>
					<img class="max-w-full m-0 rounded-lg" src={item.meta.thumbnail} alt="">
					<div class="h-auto max-w-full rounded-lg text-base opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bg-black/50 flex justify-center items-center text-white p-4">{item.meta.title}</div>
				</a>
		{/each}
	</div>
</PageContainer>
