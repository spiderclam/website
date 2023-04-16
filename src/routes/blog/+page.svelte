<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';
	import PostMeta from '$lib/components/post-meta.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<PageContainer title="Blog">
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
					{post.meta.preview}
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
