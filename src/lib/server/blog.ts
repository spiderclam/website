import type { SvelteComponentTyped } from 'svelte';
import type { ReadTimeResults } from 'reading-time';
import type { GlobEntry } from './content';
import { buildPagedContent } from './content';

interface BlogContentMetadata {
  title: string;
  description: string;
  slug: string;
  preview: string;
  tags: string[];
  date: string;
  component: SvelteComponentTyped;
  readingTime: ReadTimeResults;
}

export const blog = buildPagedContent(import.meta.glob<GlobEntry<BlogContentMetadata>>('$content/blog/**/index.svx', { eager: true }));
