<script lang="ts">
	export let title: string | null = null;
	export let size: 'huge' | 'default' | 'small' | 'tiny' | 'extraSmall' = 'default';

	const sizeClasses = {
		huge: ['md:max-w-screen-xl', 'lg:max-w-7xl'],
		default: ['md:max-w-screen-xl', 'lg:max-w-6xl'],
		small: ['md:max-w-screen-xl', 'lg:max-w-5xl'],
		extraSmall: ['md:max-w-screen-xl', 'lg:max-w-4xl'],
		tiny: ['md:max-w-screen-xl', 'lg:max-w-3xl']
	};

	$: containerClasses = [
		'px-8',
		'md:px-16',
		'lg:px-20',
		'pt-8',
		'md:pt-16',
		'container',
		'w-full',
		'text-lg',
		'mx-auto',
		'prose',
		'prose-slate',
		'dark:prose-invert',
		'flex-grow',
		...sizeClasses[size]
	].join(' ');
</script>

<div class={containerClasses}>
	{#if title}
		<h1 class="mb-4">{title}</h1>
	{/if}
	<slot />
</div>
