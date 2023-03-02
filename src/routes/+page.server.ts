import type { PageServerLoad } from './$types.d'
import getImagePaths from '$lib/utils/server/getImagePaths'

export const load = ((): object => {
  return getImagePaths()
}) satisfies PageServerLoad
