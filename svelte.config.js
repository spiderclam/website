import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import getReadingTime from 'reading-time';
import { visit } from 'unist-util-visit';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { createHighlighter } from '@bitmachina/highlighter';
import preview, { textFormatter } from 'remark-preview';

function slugPlugin() {
	function makeSlug(file) {
		const m = file.match(/\/([\w-]+)\/index\.(svx|md)$/);

		if (!m)
			throw new Error(
				`haha, guess your regex is not as good as you thought. Failed to parse file: ${file}`
			);

		return m[1];
	}

	return function (_, file) {
		file.data.fm.slug = makeSlug(file.filename);
	};
}

function readingTimePlugin() {
	return function (info, file) {
		let text = '';

		visit(info, ['text', 'code'], (node) => {
			text += node.value;
		});

		file.data.fm.readingTime = getReadingTime(text);
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$content: 'src/content'
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	},
	extensions: ['.svx', '.svelte', '.html'],
	preprocess: [
		vitePreprocess(),
		sveltePreprocess(),
		mdsvex({
			highlight: {
				highlighter: await createHighlighter({ theme: 'rose-pine-moon' })
			},
			extensions: ['.svx'],
			remarkPlugins: [
				readingTimePlugin,
				slugPlugin,
				preview(textFormatter({ length: 250, maxBlocks: 2 }))
			],
			smartypants: {
				dashes: 'oldschool'
			}
		})
	]
};

export default config;
