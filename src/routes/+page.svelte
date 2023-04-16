<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';
	import PostMeta from '$lib/components/post-meta.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
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
			<article
				class="rounded-lg border border-slate-100 p-4 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:shadow-slate-800/25 sm:p-6 backdrop-blur-xl bg-white/5 hover:bg-white/10"
			>
				<a href={`blog/${post.slug}`} class="no-underline">
					<h3 class="mt-0.5">
						{post.meta.title}
					</h3>
				</a>

				<PostMeta {post} />

				<p class="mt-4 mb-2 text-sm leading-relaxed line-clamp-3">
					{post.meta.excerpt}
				</p>

				<a
					href={`blog/${post.slug}`}
					class="group inline-flex items-center gap-1 text-sm font-medium"
				>
					Read post
					<span aria-hidden="true" class="block transition group-hover:translate-x-0.5">
						&rarr;
					</span>
				</a>
			</article>
		{/each}
	</div>
</PageContainer>
