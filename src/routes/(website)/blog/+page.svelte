<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';
	import PostCard from '$lib/components/post-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Spiderclam's blog" />
</svelte:head>

<PageContainer title="Blog">
	<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
		{#each data.blog as post}
			<PostCard {post} />
		{/each}
	</div>
</PageContainer>
