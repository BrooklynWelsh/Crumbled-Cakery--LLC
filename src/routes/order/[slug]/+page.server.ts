import { error } from '@sveltejs/kit'
import productData from '$static/product_info/products.json'
import type ProductMetadata from '$types/ProductMetaData'
import type { PageServerLoad } from './$types'
function isValidProductObject (obj: unknown): obj is ProductMetadata {
  return (obj as ProductMetadata)?.link !== null
}

/** @type {import('./$types').PageServerLoad} */
export const load = (({ params }): object => {
  for (const product of productData) {
    console.log('checking')
    console.log(product)
    if (params.slug === product.link.substring(product.link.lastIndexOf('/') + 1, product.link.length)) {
      console.log('found')
      return { form: product }
    }
  }
  throw error(404, 'Not found')
}) satisfies PageServerLoad
