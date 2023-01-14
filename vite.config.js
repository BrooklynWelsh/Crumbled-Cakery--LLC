import { sveltekit } from '@sveltejs/kit/vite'
import mkcert from 'vite-plugin-mkcert'
import path from 'node:path'

const isDev = !!process.env.DEV

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    minify: false
  },
  plugins: [sveltekit(), mkcert()],
  resolve: {
    alias: {
      $components: path.join(__dirname, '/src/lib/components'),
      $static: path.join(__dirname, '/static'),
      $types: path.join(__dirname, '/src/types')
    }
  },
  server: {
    hmr: false
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
}

export default config
