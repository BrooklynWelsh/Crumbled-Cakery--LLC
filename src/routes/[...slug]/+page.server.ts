import type { Actions } from './$types'

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    // TODO handle adding to cart
    console.log('event')
    console.log(event)
    console.log('params')
    console.log(event.params)
    console.log('req body')
    console.log(event.request.body)
    console.log('searchParams')
    console.log(event.url.searchParams)
    
  }
} satisfies Actions
