import ProductMetadata from '$types/ProductMetaData'
import type { PageData } from '$types'
import { error } from '@sveltejs/kit'

export default (data: PageData): ProductMetadata[] => {
  const productsObject: ProductMetadata[] = []
  try {
    for (const anObject of data.obj) {
      try {
        const thing = new ProductMetadata(anObject)
        productsObject.push(thing)
      } catch (e) {
        console.error(e)
        continue
      }
    }
  } catch (e) {
    console.log('error')
    console.error(e)
    throw error(
      500,
      'Oops! Trouble accessing product database. Please try again later or contact us so we can fix it!'
    )
  }
  return productsObject
}
