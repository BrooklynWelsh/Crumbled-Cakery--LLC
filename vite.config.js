import { sveltekit } from '@sveltejs/kit/vite'
import path from 'node:path'

const isDev = !!process.env.DEV

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    minify: !isDev
  },
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $static: path.join(__dirname, '/static'),
      $types: path.join(__dirname, '/src/types')
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
}

export default config
