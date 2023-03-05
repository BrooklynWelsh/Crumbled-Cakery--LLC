import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'
import Cake from '$components/OrderForm/cakes/VisualBuilder.svelte'
import Home from '$components/Home.svelte'
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
        Cake,
        Home,
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

    return {
      storyblokApi,
      products: dataProductOrderForm.data.story
    }
  } catch (e) {
    console.log('layout.ts')
    console.error(e)
    return null
  }
}) satisfies LayoutLoad
