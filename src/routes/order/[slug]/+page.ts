import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
// export async function load({ params }) {
//   // Dynamically import the order form type needed for current slug
//   const orderFormFile = `./../../../types/SpecificOrderForms/${params.slug}.ts`
//   const orderFormModule = await import(orderFormFile);
//   console.log(orderFormModule)
//   const orderFormObject = new orderFormModule.default()
//   // Default fields applicable to all baked good order pages 
//   const fields: OrderForm = {
//     "count": { "name": "", "minimum": "", "options": "" },
//     "style": { "name": "", "options": "" },
//     "colors": { "name": "Colors", "text": "" },
//     "addOns": { "name": "Add-ons", "text": "" }
//   }

//   if (params.slug === 'cakes') {
//     fields.count.name = "Tiers"
//     fields.layers = {}
//     return {
//       title: 'Hello world!',
//       content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
//     };
//   }

//   throw error(404, 'Not found');
// }

export function load({ params }) {
  return {
    formType: params.slug
  }
}