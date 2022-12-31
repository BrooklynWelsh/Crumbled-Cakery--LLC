import { sveltekit } from '@sveltejs/kit/vite'
import svg from '@poppanator/sveltekit-svg'
import path from 'node:path'

const isDev = !!process.env.DEV

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    minify: !isDev
  },
  plugins: [sveltekit(),
    svg({ includePaths: ['./src/images/logo/*'] })],
  resolve: {
    alias: {
      '$specific-order-forms': path.resolve('src/types/SpecificOrderForms'),
      $specificOrderForms: path.resolve('src/types/SpecificOrderForms'),
      specificOrderForms: path.resolve('src/types/SpecificOrderForms')
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
}

export default config
