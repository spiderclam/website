<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { browser } from '$app/environment';
	import { domain } from '$lib/config';
	import { slide } from 'svelte/transition';
	import BackgroundGradient from '$lib/components/background-gradient.svelte';
	import SocialIcons from '$lib/components/social-icons.svelte';

	import '../app.css';

	function menuClick(event: Event) {
		event.preventDefault();
		event.stopPropagation();

		open = !open;
	}

	function closeWhenClickedOutside(event: MouseEvent) {
		open = false;
	}

	function preventScroll(event: Event) {
		event.preventDefault();
		event.stopPropagation();

		return false;
	}

	function navOpened() {
		if (!browser) return;

		document.body.style.touchAction = 'none';

		document.addEventListener('click', closeWhenClickedOutside);
		window.addEventListener('wheel', preventScroll, { passive: false });
	}

	function navClosed() {
		if (!browser) return;

		document.body.style.touchAction = 'inherit';

		document.removeEventListener('click', closeWhenClickedOutside);
		window.removeEventListener('wheel', preventScroll);
	}

	$: open = false;
	$: open ? navOpened() : navClosed();
</script>

<BackgroundGradient />

<header
	aria-label="Site Header"
	class="backdrop-blur-xl bg-white/10 sticky top-0 shadow-sm dark:shadow-md"
>
	<section
		class="container mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-8 lg:px-8"
	>
		<a class="block" href="/">
			<span class="sr-only">Home</span>
			<img class="h-10" src={logo} alt="Logo" />
		</a>

		<div class="flex flex-1 items-center justify-end md:justify-between">
			<nav aria-label="Site Nav" class="hidden md:block">
				<ul class="flex items-center gap-6 text-sm font-serif">
					<li>
						<a
							class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
							href="/blog"
						>
							Blog
						</a>
					</li>
					<li>
						<a
							class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
							href="/stuff"
						>
							Stuff
						</a>
					</li>
					<li>
						<a
							class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
							href="/about"
						>
							About
						</a>
					</li>
				</ul>
			</nav>

			<div class="flex items-center gap-4">
				<button
					on:click={menuClick}
					class="block rounded bg-slate-100 p-2.5 text-slate-600 transition hover:text-slate-600/75 dark:bg-slate-800 dark:text-white dark:hover:text-white/75 md:hidden"
				>
					<span class="sr-only">Toggle menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</section>

	{#if open}
		<nav
			id="mobile-menu"
			transition:slide
			aria-label="Site Nav"
			class="md:hidden py-2 px-4 sm:px-8 lg:px-8 shadow-t shadow shadow-slate-800 backdrop-blur-xl bg-slate-700/50"
		>
			<ul class="flex flex-col gap-2 text-sm font-serif p-2">
				<li class="p-2">
					<a
						class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
						href="/"
					>
						Home
					</a>
				</li>
				<li class="p-2">
					<a
						class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
						href="/blog"
					>
						Blog
					</a>
				</li>
				<li class="p-2">
					<a
						class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
						href="/stuff"
					>
						Stuff
					</a>
				</li>
				<li class="p-2">
					<a
						class="text-slate-600 dark:text-slate-200 duration-200 transition-colors hover:text-slate-400"
						href="/about"
					>
						About
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<slot />

<footer aria-label="Site Footer">
	<div
		class="max-w-screen-xl pt-16 pb-8 mx-auto px-4 sm:px-6 lg:px-8 lg:pt-24 prose prose-slate dark:prose-invert"
	>
		<hr class="mb-8" />
		<div class="sm:flex sm:items-center sm:justify-between not-prose">
			<span
				class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end transition text-slate-600"
			>
				&copy; {new Date().getFullYear()}
				{domain}
			</span>

			<SocialIcons />
		</div>
	</div>
</footer>

<style>
</style>
