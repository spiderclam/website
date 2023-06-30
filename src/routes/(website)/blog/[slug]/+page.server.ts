import { blog } from '$lib/server/blog';
import { error } from '@sveltejs/kit';
import { title } from '$lib/config';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }: { params: { slug: string } }) {
  const { page, ...content } = blog.lookup(params.slug);

  if (!content) throw error(404, 'Not found');

  return {
    title: title(content.meta.title),
    content,
    page: {
      previous: page.previous ? blog.lookup(page.previous) : null,
      next: page.next ? blog.lookup(page.next) : null,
    }
  };
}
