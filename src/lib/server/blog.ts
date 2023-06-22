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

export interface BlogContentDataEntry {
  slug: string;
  meta: Omit<BlogContentMetadata, 'slug'> & {
    dateFormatted: string;
    dateInstance: Date;
  };
  page: {
    next: null | string;
    previous: null | string;
  }
}

export const blog = buildPagedContent<BlogContentDataEntry>(
  import.meta.glob<GlobEntry<BlogContentMetadata>>('$content/blog/**/index.svx', { eager: true }),
  (data, [file]) => {
    const { date } = data.meta;
    const dateInstance = new Date(date);

    return {
      date,
      dateInstance,
      dateFormatted: dateInstance.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
  }
);
