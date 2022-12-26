import { sveltekit } from '@sveltejs/kit/vite';

const isDev = !!process.env.DEV;

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		minify: !isDev,
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
