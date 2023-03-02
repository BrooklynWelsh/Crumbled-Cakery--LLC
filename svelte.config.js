import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import svelte from 'rollup-plugin-svelte';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({ postcss: true }),
		svelte(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({ assets: 'static' }),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src/'),
			$static: path.resolve('./static/'),
			$types: path.resolve('./src/types'),
			'@storyblok/svelte': './node_modules/@storyblok/svelte'
		},
		files: {
			assets: 'static'
		},
		prerender: {
			entries: ['*']
		}
	},
	compilerOptions: {}
};

export default config;
