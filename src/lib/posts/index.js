import { parse } from 'path';

interface Post {
  title: string;
  description: string;
  date: string;
}

export const posts = Object.entries(import.meta.glob('/src/lib/posts/**/*.md', { eager: true }))
  .map(([filepath, post]) => {
    return {
      ...post.metadata,

      // generate the slug from the file path
      slug: parse(filepath).name,

    };
  })
