<script lang="ts">
	import type { ContentDataEntry } from '$lib/server/content';
	import PostMeta from '$lib/components/post-meta.svelte';

	export let post: ContentDataEntry;
</script>

<article
	class="rounded-lg border border-slate-100 p-4 shadow-sm transition hover:shadow-lg flex flex-col justify-between dark:border-slate-400 dark:shadow-slate-400/25 sm:p-6 backdrop-blur-xl bg-white/5 hover:bg-white/10"
>
	<div class="mb-2">
		<a href={`blog/${post.slug}`} class="no-underline">
			<h3 class="mt-0.5">
				{post.meta.title}
			</h3>
		</a>

		<PostMeta {post} />

		<p class="mt-4 mb-2 text-sm leading-relaxed line-clamp-3">
			{post.meta.preview}
		</p>
	</div>
	<a href={`blog/${post.slug}`} class="group inline-flex items-center gap-1 text-sm font-medium">
		Read post
		<span aria-hidden="true" class="block transition group-hover:translate-x-0.5"> &rarr; </span>
	</a>
</article>
