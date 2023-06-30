/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,ts,svelte,md}',
		require('path').join(require.resolve(
				'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts,css}'
		)
	],
	theme: {
		fontFamily: {
			sans: ['PT Sans', 'sans-serif'],
			serif: ['Cabin', 'serif'],
			mono: ['JetBrains Mono', 'monospace']
		},
		extend: {}
	},
	plugins: [
		require(
			'@tailwindcss/typography',
			...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
			),
	],
	safelist: ['utterances']
};
