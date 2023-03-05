import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
 
export const load = (({ params }) => {
    console.log('PARAMS')
    console.log(params)
  if (!params.slug) {
    throw redirect(301, '/home');
  }
}) satisfies LayoutServerLoad;