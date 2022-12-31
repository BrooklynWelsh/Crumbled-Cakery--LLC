// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import * as types from '@sveltejs/kit'
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
  interface Platform {
    env?: {
      KV_NAMESPACE_HERE: KVNamespace
    }
  }
}

declare module '*.svg?component' {
  const content: ConstructorOfATypedSvelteComponent
  export default content
}
