<script>
    import PageContainer from '$lib/components/page-container.svelte';
    import {title} from '$lib/config';
    import photo from '$lib/assets/photo.png?format=webp&w=384&h=384';
    import resume from './Resume-Wesley-Overdijk.pdf';
    import SocialIcons from "$lib/components/social-icons.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{title('About')}</title>
    <meta name="description" content="About Spiderclam"/>
</svelte:head>
<PageContainer size="small">
    <!--    <a href={resume} target="_blank">Link to my resume</a>-->
    <div class="flex justify-center">
        <div class="flex h-32 w-32 items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img class="h-full w-full rounded-full" src={photo} alt=""/>
        </div>
    </div>
    <div class="text-center mb-2">
        <h1 class="text-4xl font-bold mt-4 mb-4">Wesley Overdijk</h1>
        <p class="text-lg mb-4 mt-2">Versatile Software Engineer</p>
        <div class="flex justify-center mt-6">
            <SocialIcons color="300"/>
        </div>
    </div>
    <h2 class="mb-2">Summary</h2>
    <p>
        I'm a programmer based in The Netherlands with 15 years of experience under my belt. I'm the proud owner of
        Spoonx Studio, a
        development agency (which consists of me and some other freelancers I enjoy working with) that specializes in
        cutting-edge technologies like Node.js, TypeScript, and React Native.
    </p>
    <p>
        When I'm not busy with work, I love exploring my creative side through music. Sometimes I'll play my guitar,
        piano or drums. Other times it's music production using my DAW of choice: Reaper.
    </p>
    <p>
        I'm also passionate about contributing to the open source community. I've contributed to several
        projects and have authored Wetland, a TypeScript Node.js ORM, and Stix, a TypeScript Node.js
        framework. Nowadays my contributions are mostly on discord and slack, where I help guide people.
    </p>
    <p>
        My goals and aspirations include continually learning new things and finding creative ways to
        combine my diverse range of skills and interests. One example of this is using Three.js to bring
        together my 3D experience and web development expertise.
    </p>
    <p class="italic text-base">
        <strong>Disclaimer:</strong> ChatGPT rewrote most of this for me. At the time
        of writing ChatGPT is all anyone can talk about so of course I felt like I had to.
    </p>

    <h2 class="mb-2">Languages</h2>
    <div>
        <ul>
            <li>Dutch (fluent)</li>
            <li>English (fluent)</li>
            <li>Portuguese (A1)</li>
            <li>French (A1)</li>
        </ul>
    </div>

    <h2 class="mb-2">Tools &amp; skills</h2>
    <p>To keep the list of work experience concise I've collected the more common tools and skills in this separate list.</p>

    <ul>
        <li>Git (local cli, GitHub, GitLab, Bitbucket and Azure Repos)</li>
        <li>Jest</li>
        <li>Blender</li>
        <li>Styled components</li>
        <li>Miro</li>
        <li>Trello</li>
        <li>Figma</li>
        <li>Atlassian (Jira, confluence)</li>
        <li>React Query</li>
        <li>Storybook</li>
        <li>OOP</li>
        <li>zsh</li>
    </ul>

    <h2 class="mb-2">Work Experience</h2>

    {#each data.experience as xp}
        <div class="mb-8">
            <h4 class="mb-1">{xp.meta.title} - {xp.meta.company}</h4>
            <p class="text-sm">{xp.meta.dates.formatted}</p>
            {@html xp.meta.component}
            {#if xp.meta.tech.length > 0}
                <div class="flex flex-wrap gap-2 mb-6">
                    {#each xp.meta.tech as t}
                        <span
                                class="whitespace-nowrap rounded-full border-orange-100 px-2.5 py-0.5 text-xs text-orange-600 dark:border-orange-600 dark:text-orange-100 border-2"
                        >{t}</span>
                    {/each}
                </div>
            {/if}
            <hr class="m-0" />
        </div>
    {/each}
</PageContainer>
