// import { error } from '@sveltejs/kit'

import { DefaultOrderForm } from '$types/GenericOrderForm'
import type { PageLoad } from './$types'
export const load = (({ params }) => {
  const maxColors = 4
  const testForm = new DefaultOrderForm({
    productName: 'Cakes',
    maxColors,
    startingPrice: 1.11,
    imageFilePath: '$',
    count: { index: 0, id: 'count', title: 'Tiers', minimum: 0, options: [{ index: 0, name: '', price: -1 }] },
    colors: {
      index: 2,
      id: 'colors',
      title: 'Colors',
      description: `Decor can be a collection of ${maxColors} colors of your 
            choosing and white. List your choices here! You may submit a link to a 
            color palette if you would like`
    },
    style: { index: 3, id: 'style', title: 'Style', options: [{ index: 0, name: 'Simple | Yet beautiful! Stylishly decorated and an eye-catching presentation.', price: 1 }] },
    addOns: { index: 4, id: 'addons', title: 'Add-ons', description: '' },
    comments: { index: 5, id: 'comments', title: 'Final Comments, Questions, or Ideas?', description: '' },
    nonDefaultOptions: [
      { key: 'layers', index: 1, id: 'layers', title: 'Layers | Per Tier', options: [{ index: 0, name: '2', price: 1 }] },
      { key: 'flavors', index: 6, id: 'flavors', title: 'Flavor Offerings', options: [{ index: 0, name: 'Vanilla | A rich classic, more flavors to come.', price: 1 }] },
      { key: 'event', index: 7, id: 'event', title: 'Event | Please provide specifics in Final Comments', options: [{ name: 'Birthday', price: 1, index: 0 }] }
    ]
  })
  console.log('test form')
  console.log(testForm)
  return {
    form: testForm,
    formType: params.slug
  }
}) satisfies PageLoad
