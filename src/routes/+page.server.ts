// src/routes/+page.server.ts
import { blog } from '$lib/server/blog';
import { title } from '$lib/config';

export const load = async () => {
  return {
    title: title('Landing'),
    blog: (await blog.content).slice(0, 3), // make posts available on the client
  };
};
