import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			mobile: '320px',
			tablet: '640px',
			laptop: '1024px',
			desktop: '1440px'
			// @media (max-width: theme('screens.desktop')) {}
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
