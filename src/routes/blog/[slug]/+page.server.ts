import { bySlug } from '$lib/server/content';
import { error } from '@sveltejs/kit';
import { title } from '$lib/config';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }: { params: { slug: string } }) {
  const { page, ...content } = bySlug(params.slug);

  if (!content) throw error(404, 'Not found');

  return {
    title: title(content.meta.title),
    content,
    page: {
      previous: page.previous ? bySlug(page.previous) : null,
      next: page.next ? bySlug(page.next) : null,
    }
  };
}
