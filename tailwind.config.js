/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,ts,svelte,md}'],
	theme: {
		fontFamily: {
			sans: ['PT Sans', 'sans-serif'],
			serif: ['Cabin', 'serif'],
			mono: ['JetBrains Mono', 'monospace']
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')],
	safelist: ['utterances']
};
