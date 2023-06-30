<script lang="ts">
	import PageContainer from '$lib/components/page-container.svelte';
	import GalleryMeta from '$lib/components/content-meta.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.content.meta.description} />
	<meta property="og:image" content={data.content.meta.og} />
</svelte:head>

<PageContainer size="huge">
	<article>
		<div class="text-slate-800 dark:text-slate-200 text-lg min-w-full">
			<h1 class="mt-0 mb-0">{data.content.meta.title}</h1>
			<span class="mt-2 text-xl mb-2 font-normal" role="doc-subtitle">
				{data.content.meta.description}
			</span>

			<GalleryMeta date={data.content.meta.date} />

			<div class="mt-8">
				<svelte:component this={data.component} />
			</div>

			{#if data.content.meta.generated}
				{#each data.content.meta.images as image}
					<img src={image} class="rounded-lg" alt="" />
				{/each}
			{/if}
		</div>

		<div class="flex-row flex justify-between min-w-full print:hidden mt-16">
			<div class="flex flex-col">
				<!-- Nested if so we always have a left side, so "next" aligns to the right -->
				{#if data.page.previous}
					<strong class="text-lg">Previous</strong>
					<a href={data.page.previous.slug}>{data.page.previous.meta.title}</a>
				{/if}
			</div>

			{#if data.page.next}
				<div class="flex flex-col text-right">
					<strong class="text-lg">Next up</strong>
					<a href={data.page.next.slug}>{data.page.next.meta.title}</a>
				</div>
			{/if}
		</div>

		<hr class="my-4 print:hidden" />
		<h2 class="mt-0 text-2xl mb-0 print:hidden" role="doc-subtitle">Comments</h2>

		<div id="article-comments" class="print:hidden">
			<script
				src="https://utteranc.es/client.js"
				repo="spiderclam/website"
				issue-term="pathname"
				label="💬 comment"
				theme="preferred-color-scheme"
				crossorigin="anonymous"
				async
			>
			</script>
		</div>
	</article>
</PageContainer>

<style global>
	.utterances {
		max-width: unset;
	}

	code {
		counter-reset: step;
		counter-increment: step 0;
		@apply tracking-wide;
	}

	code [data-line-number]::before {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		@apply text-slate-600;
	}

	code > span {
		width: 100%;
	}

	code > span[data-highlighted] {
		padding: 2px;
		@apply bg-slate-700;
		@apply rounded-md;
	}
</style>
