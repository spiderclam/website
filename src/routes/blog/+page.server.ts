import { title } from '$lib/config';
import { blog } from '$lib/server/content';

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    title: title('Blog'),
    blog
  };
}
