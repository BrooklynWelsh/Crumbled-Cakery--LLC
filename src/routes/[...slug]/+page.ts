import type { PageLoad } from '$types'

export const prerender = false

export async function load ({ params, parent }): PageLoad {
  await parent()
  const { storyblokApi } = await parent()
  const slug: string | undefined = params.slug
  let path = 'cdn/stories/'
  if (slug) {
    path += slug
  } else {
    path += 'home'
  }
  const dataStory = await storyblokApi.get(path, {
    version: 'draft'
  })

  return {
    story: dataStory.data.story
  }
}
