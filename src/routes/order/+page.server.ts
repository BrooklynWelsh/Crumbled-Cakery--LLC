import jsonObject from '$static/product_info/products.json'
import type { PageServerLoad } from './$types.d'
import getImagePaths from '$lib/utils/server/getImagePaths'

export const load = ((): object => {
  return getImagePaths(jsonObject)
}) satisfies PageServerLoad
