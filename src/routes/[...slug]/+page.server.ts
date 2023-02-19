import type { Actions } from './$types'

/** @type {import('./$types').Actions} */
export const actions = {
  add_to_cart: async ({params, request}) => {
    // TODO handle adding to cart
    // console.log('event')
    // console.log(event)
    // console.log('params')
    // console.log(event.params)
    // console.log('req body')
    // console.log(event.request.body)
    // console.log('searchParams')
    // console.log(event.url.searchParams)
    const data = await request.formData()
    console.log('form data')
    console.log(data)
    console.log('params')
    console.log(params)

    if (params.slug === 'order/cakes') {
      const transformedData = handleCakeOptions(data)
    }
  }
} satisfies Actions

/**
 * Converts a FormData object with cake tier options into one with all tier options grouped by index/id.
 * @param data - FormData array
 * @return {FormData} Returns the FormData object but with all tier options grouped together by tier index/id.
 */
const handleCakeOptions = (data: FormData): FormData => {
  const returnData = { tierData: {} }
  console.log('entries')
  console.log(data.entries())

  const tierOptions = {}
  for (const [key, value] of data.entries()) {
    if (key.includes('tier[')) {
      const tierId = key.substring(key.indexOf('[') + 1, key.indexOf(']'))
      const tierOption = key.substring(key.lastIndexOf('[') + 1, key.lastIndexOf(']'))
      if (!Object.prototype.hasOwnProperty.call(tierOptions, tierId)) {
        tierOptions[tierId] = {}
      }
      tierOptions[tierId][tierOption] = value
      returnData.tierData[tierId] = tierOptions[tierId]
    } else {
      returnData[key] = value
    }
  }

  return returnData
}
