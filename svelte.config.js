import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'
import svelte from 'rollup-plugin-svelte'
import path from 'node:path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    svelte()],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib'),
      $src: path.resolve('./src/'),
      $static: path.resolve('./static/'),
      $types: path.resolve('./src/types')
    },
    files: {
      assets: 'static'
    },
    prerender: {
      entries: ['*', '/order/[slug]']
    }
  },
  compilerOptions: {}
}

export default config
