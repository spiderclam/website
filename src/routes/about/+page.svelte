<script>
	import PageContainer from '$lib/components/page-container.svelte';
	import { title } from '$lib/config';
	import resume from './Resume-Wesley-Overdijk.pdf';
</script>

<svelte:head>
	<title>{title('About')}</title>
</svelte:head>
<PageContainer title="About Spiderclam" size="small">
	<a href={resume} target="_blank">Link to my resume</a>
	<p>
		Welcome to Spiderclam, the online home of Wesley Overdijk! I'm a programmer based in The
		Netherlands with 16 years of experience under my belt. I'm the proud owner of Spoonx Studio, a
		development agency that specializes in cutting-edge technologies like Node.js, TypeScript, and
		React Native.
	</p>
	<p>
		When I'm not busy with work, I love exploring my creative side through music production. You
		might even find some of my music on this website!
	</p>
	<p>
		I'm also passionate about contributing to the open source community. I've contributed to several
		projects and have authored Wetland, a TypeScript Node.js ORM, and Stix, a TypeScript Node.js
		framework.
	</p>
	<p>
		My goals and aspirations include continually learning new things and finding creative ways to
		combine my diverse range of skills and interests. One example of this is using Three.js to bring
		together my 3D experience and web development expertise.
	</p>
	<p>
		Here on Spiderclam, you'll find some of my free 3D assets, as well as my thoughts on machine
		learning, Rust, and other exciting technologies. I'm excited to share my knowledge and
		experiences with you, so stay tuned for more updates and insights. Thanks for stopping by!
	</p>
	<p class="italic text-base">
		<strong>Disclaimer:</strong> ChatGPT wrote this for me because nobody reads this. Also, at the time
		of writing ChatGPT is all anyone can talk about so of course I felt like I had to.
	</p>
</PageContainer>
