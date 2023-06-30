import { gallery } from '$lib/server/gallery';
import { error } from '@sveltejs/kit';
import { title } from '$lib/config';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }: { params: { slug: string } }) {
  const { page, ...content } = gallery.lookup(params.slug);

  if (!content) throw error(404, 'Not found');

  return {
    title: title(content.meta.title),
    content,
    page: {
      previous: page.previous ? gallery.lookup(page.previous) : null,
      next: page.next ? gallery.lookup(page.next) : null,
    }
  };
}
