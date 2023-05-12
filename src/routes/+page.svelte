<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';
	import PostCard from '$lib/components/post-card.svelte';
	import PostMeta from '$lib/components/post-meta.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Spiderclam's den" />
</svelte:head>

<PageContainer title="Spiderclam's den">
	<p>
		Hello and welcome! Browse around my work in progress. This website is going to be whatever I
		feel like it should be. This paragraph is very long and that's not an accident, it's actually on
		purpose. The reason it's this long is because I want to figure out if the vertical spacing of
		the headers still looks as bad when the paragraphs below it are longer. I feel like that might
		somehow make a difference but there's only one way to find out. And sure, I could get myself a
		nice lorem ipsum, but where's the fun in that?
	</p>
	<h2>What is a spiderclam?</h2>
	<p>
		You ask too many questions. Also Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Suscipit adipisci, ipsam quos consequuntur hic eveniet at obcaecati explicabo ratione ipsa sed
		sint, cupiditate quis aliquam velit rem culpa nesciunt facere.
	</p>
	<h2 class="mb-4">Latest blog posts</h2>
	<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
		{#each data.blog as post}
			<PostCard {post} />
		{/each}
	</div>
</PageContainer>
