import { title } from '$lib/config';
import { gallery } from '$lib/server/gallery';

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    title: title('Gallery'),
    gallery: gallery.content
  };
}
