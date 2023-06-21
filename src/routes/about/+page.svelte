<script>
	import PageContainer from '$lib/components/page-container.svelte';
	import { title } from '$lib/config';
	import photo from '$lib/assets/photo.png?format=webp&w=384&h=384';
	import SocialIcons from '$lib/components/social-icons.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{title('About')}</title>
	<meta name='description' content='About Spiderclam' />
</svelte:head>
<PageContainer size='small'>
	<div class='print:text-base print-container'>
		<div class='flex justify-center'>
			<div
				class='flex h-32 w-32 items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'>
				<img class='h-full w-full rounded-full' src={photo} alt='My face' />
			</div>
		</div>
		<div class='text-center mb-2'>
			<h1 class='text-4xl font-bold mt-4 mb-4'>Roberto Wesley Overdijk</h1>
			<p class='text-lg mb-0 mt-2'>Versatile Software Engineer</p>
			<p class='text-sm mb-4 mt-0'>Heerhugowaard, The Netherlands</p>
			<div class='flex justify-center mt-0 gap-x-4 text-sm'>
				<a
					href='mailto:r.w.overdijk@gmail.com'
					rel='noreferrer'
					target='_blank'
					class='flex gap-x-1'
				>
					<span class='sr-only'>Email</span>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clip-rule="evenodd" />
					</svg>
					 r.w.overdijk@gmail.com
				</a>
				<a
					href='tel:0031615553243'
					rel='noreferrer'
					target='_blank'
					class='flex gap-x-1'
				>
					<span class='sr-only'>Email</span>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
						<path fill-rule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z" clip-rule="evenodd" />
					</svg>
					+31 (0)6 15 55 32 43
				</a>
			</div>

			<div class='flex justify-center mt-4'>
				<SocialIcons color='300' />
			</div>
		</div>
		<h2 class='mb-2 mt-10'>Summary</h2>
		<p>
			I'm a Versatile Software Engineer with over 15 years of experience under my belt, based in Heerhugowaard, The Netherlands where I happily live with my wife and dog.
			Most of my recent work has been through SpoonX Studio, a company name I came up with too long ago and I should probably change.
		</p>
		<p>
			I specialize in Node.js, TypeScript, and React Native but my real strength lies in being versatile. Solutions can be found in many places and I'm not afraid to look for them.
		</p>
		<p>
			I'm also passionate about contributing to the open source. I've contributed to several
			projects and have authored <a href='https://github.com/SpoonX/wetland' target='_blank'>Wetland</a> and <a href='https://github.com/SpoonX/stix' target='_blank'>Stix</a>, a TypeScript Node.js ORM and framework respectively.
			Nowadays my contributions are mostly on discord and slack, where I help guide people.
		</p>
		<p>
			My goal is to always keep learning and try new things. It's been really exciting and successful for me so far, and I definitely want to keep that energy going.
		</p>

		<div class='print:break-inside-avoid'>
			<h2 class='mb-2 mt-10'>Languages</h2>
			<div>
				<ul class='grid m-0 md:grid-cols-4 grid-cols-2'>
					<li>Dutch (fluent)</li>
					<li>English (fluent)</li>
					<li>Portuguese (A1)</li>
					<li>French (A1)</li>
				</ul>
			</div>
		</div>

		<div class='print:break-inside-avoid'>
			<h2 class='mb-2 mt-10'>Tools</h2>
			<ul class='grid m-0 md:grid-cols-3 grid-cols-2'>
				<li>Git</li>
				<li>Jest</li>
				<li>Blender</li>
				<li>Miro</li>
				<li>Trello</li>
				<li>Figma</li>
				<li>Asana</li>
				<li>Atlassian (Jira, confluence)</li>
			</ul>
		</div>

		<h2 class='mt-10 mb-6'>Work Experience</h2>

		{#each data.experience as xp}
			<div class='mb-8 print:mb-6'>
				<div class='print:break-inside-avoid'>
					<p class='text-sm print:text-sm mb-0'>{xp.meta.dates.formatted}</p>
					<h4 class='mb-0 mt-0'>{xp.meta.title} - {xp.meta.company}</h4>
					<div class='description'>
						{@html xp.meta.component}
					</div>
					{#if xp.meta.tech.length > 0}
						<div class='flex flex-wrap gap-2 mb-6'>
							{#each xp.meta.tech as t}
                        <span
													class='whitespace-nowrap rounded-full border-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:border-slate-600 dark:text-orange-100 border-2'
												>{t}</span>
							{/each}
						</div>
					{/if}
				</div>
				<hr class='m-0 mt-8 print:mt-2' />
			</div>
		{/each}
		<h2 class='mt-10 mb-5'>Hobbies</h2>
		<ul class='grid m-0 lg:grid-cols-2'>
			<li>Playing guitar, piano, synths and drums</li>
			<li>3D modeling and texturing</li>
			<li>Game development (c++ and c#)</li>
			<li>VR</li>
			<li><a href='https://medium.com/@r.w.overdijk' target='_blank'>Writing</a></li>
		</ul>
	</div>
</PageContainer>

<style global>
    .description p {
        @apply mt-3;
    }
</style>
