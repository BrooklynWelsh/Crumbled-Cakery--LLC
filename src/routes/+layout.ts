import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'
import Product from '$components/OrderForm/Product.svelte'
import ProductList from '$components/ProductList.svelte'
import ProductCard from '$components/ProductCard.svelte'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load = (async () => {
  try {
    storyblokInit({
      accessToken: '0rr6c2dH9BmnikmpRrOgwAtt',
      use: [apiPlugin],
      components: {
        Product,
        ProductList,
        ProductCard
      },
      apiOptions: {
        https: true,
        region: 'us'
      }
    })
    const storyblokApi = await useStoryblokApi()
    const dataProductOrderForm = await storyblokApi.get('cdn/stories/order', {
      version: 'draft',
      resolve_links: 'url'
    })

    console.log('layout.ts')
    console.log(dataProductOrderForm)
    console.log(dataProductOrderForm.data)
    return {
      storyblokApi,
      products: dataProductOrderForm.data.story
    }
  } catch (e) {
    console.error(e)
  }
}) satisfies LayoutLoad
