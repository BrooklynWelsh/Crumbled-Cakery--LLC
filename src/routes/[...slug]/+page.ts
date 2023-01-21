import type { PageLoad } from '$types'

export const prerender = false

export async function load ({ params, parent }): PageLoad {
  await parent()
  const { storyblokApi } = await parent()
  const slug: string | undefined = params.slug
  let path = 'cdn/stories/'
  if (slug !== null && slug !== undefined) {
    path += slug
  } else {
    path += 'home'
  }

  let dataStory

  if (storyblokApi === undefined) { // Inject test data
    dataStory = { data: { story: {} } }
    dataStory.data.story = await import('../../../tests/test-json/cake-json.json?json')
    dataStory.data.story = dataStory.data.story.default

    console.log('STORY')
    console.log(dataStory.data.story)
  } else {
    dataStory = await storyblokApi.get(path, {
      version: 'draft'
    })
  }

  if (slug !== null && slug !== undefined) {
    return {
      slug,
      story: dataStory.data.story
    }
  } else {
    return {
      story: dataStory.data.story
    }
  }
}
