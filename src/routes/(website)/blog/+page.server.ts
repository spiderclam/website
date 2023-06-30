import { title } from '$lib/config';
import { blog } from '$lib/server/blog';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    title: title('Blog'),
    blog: await blog.content
  };
}
