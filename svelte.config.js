import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$specific-order-forms': path.resolve('src/types/SpecificOrderForms'),
			$specificOrderForms: path.resolve('src/types/SpecificOrderForms'),
			specificOrderForms: path.resolve('src/types/SpecificOrderForms'),
			$src: path.resolve('./src/')
		}
	},
	compilerOptions: {}
};

export default config;
