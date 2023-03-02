import jsonObject from '$static/product_info/front_page_products.json'
import type { PageServerLoad } from './$types.d'
const imageGlobs = import.meta.glob('$static/images/products/*.jpg', { eager: true })

export default ((): object => {
  const paths: string[] = []
  for (const path in imageGlobs) {
    console.log('path')
    console.log(imageGlobs[path].default)
    paths.push(imageGlobs[path].default)
  }
  return { obj: jsonObject, paths }
}) satisfies PageServerLoad
