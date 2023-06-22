<script lang="ts">
	import type { BlogContentDataEntry } from '$lib/server/blog';

	export let post: BlogContentDataEntry;
</script>

<div class="flex flex-row gap-2 text-sm items-center mb-2 mt-4">
	<div class="flex flex-row gap-1 items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-4 h-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
			/>
		</svg>

		<time datetime={post.meta.date}>
			{post.meta.dateFormatted}
		</time>
	</div>
	·
	<div class="flex flex-row gap-1 items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-4 h-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
			/>
		</svg>

		{post.meta?.readingTime?.text}
	</div>
</div>

<!-- <div class="flex flex-wrap gap-2 mt-2">
	{#each post.meta.tags as tag}
		<span
			class="whitespace-nowrap rounded-full border-orange-100 px-2.5 py-0.5 text-xs text-orange-600 dark:border-orange-600 dark:text-orange-100 border-2"
		>
			#{tag}
		</span>
	{/each}
</div> -->
