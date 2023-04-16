// src/routes/+page.server.ts
import { blog } from '$lib/server/content';
import { title } from '$lib/config';

export const load = async () => {
  return {
    title: title('Landing'),
    blog: blog.slice(0, 3), // make posts available on the client
  };
};
