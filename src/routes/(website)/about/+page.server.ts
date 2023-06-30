import { title } from '$lib/config';
import { experience } from '$lib/server/experience';

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    title: title('Experience'),
    experience
  };
}
