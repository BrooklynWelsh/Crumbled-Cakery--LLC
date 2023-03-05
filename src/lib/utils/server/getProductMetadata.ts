import ProductMetadata from '$types/ProductMetadata'
import type { PageData } from '$types'
import { error } from '@sveltejs/kit'

export default (data: PageData): ProductMetadata[] => {
  const productsObject: ProductMetadata[] = []
  try {
    console.log('DATA')
    console.log(data.story)
    for (const anObject of data.obj) {
      console.log('OBJ')
      console.log(anObject)
      try {
        const thing = new ProductMetadata(anObject)
        productsObject.push(thing)
      } catch (e) {
        console.error(e)
      }
    }
  } catch (e) {
    console.log('error in getProductMetadata')
    console.error(e)
    throw error(
      500,
      'Oops! Trouble accessing product database. Please try again later or contact us so we can fix it!'
    )
  }
  return productsObject
}
