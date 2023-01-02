import jsonObject from '$static/product_info/products.json'
import type { PageServerLoad } from './$types.d'
const imageGlobs = import.meta.glob('$static/images/products/*.jpg', { eager: true })

export default ((): object => {
  const paths: string[] = []
  for (const path in imageGlobs) {
    paths.push(imageGlobs[path].default)
  }
  return { obj: jsonObject, paths }
}) satisfies PageServerLoad
