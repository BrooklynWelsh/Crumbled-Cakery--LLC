import cake from '$static/images/products/Caramel_Wafer_Cake.jpg'
import cupcakes from '$static/images/products/Frog_Cupcakes.jpg'
import cakePops from '$static/images/products/placeholders/cakepop_placeholder.jpg'
import miniCupcakes from '$static/images/products/placeholders/mini_cupcake_placeholder.jpg'
import sugarCookies from '$static/images/products/placeholders/sugar_cookie_placeholder.jpg'
import specialOrder from '$static/images/products/placeholders/special_order_placeholder.jpg'
import rentals from '$static/images/products/placeholders/rentals_placeholder.jpg'

/** @type {import('./$types').PageServerLoad} */
export function load (): object {
  const products: Array<{ name: string, imageLoc: string, link: string }> = []
  products.push({ name: 'Cakes', imageLoc: cake, link: '/order/cakes' })
  products.push({ name: 'Cupcakes', imageLoc: cupcakes, link: '/order/cupcakes' })
  products.push({ name: 'Cake Pops', imageLoc: cakePops, link: '/order/cakePops' })
  products.push({ name: 'Mini Cupcakes', imageLoc: miniCupcakes, link: '/order/mini-cupcakes' })
  products.push({ name: 'Sugar Cookies', imageLoc: sugarCookies, link: '/order/sugar-cookies' })
  products.push({ name: 'Special Orders', imageLoc: specialOrder, link: '/order/special-orders' })
  products.push({ name: 'Rentals', imageLoc: rentals, link: '/order/rentals' })
  console.log(products)
  return {
    products
  }
}
