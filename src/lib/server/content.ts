import type { ReadTimeResults } from 'reading-time';

interface ContentMetadata {
  title: string;
  description: string;
  slug: string;
  preview: string;
  tags: string[];
  date: string;
  component: ConstructorOfATypedSvelteComponent;
  readingTime: ReadTimeResults;
}

type GlobEntry = {
  metadata: ContentMetadata;
  default: ConstructorOfATypedSvelteComponent;
};

export interface ContentDataEntry {
  slug: string;
  meta: Omit<ContentMetadata, 'slug'> & {
    dateFormatted: string;
    dateInstance: Date;
  };
  // component: ConstructorOfATypedSvelteComponent;
  page: {
    next: null | string;
    previous: null | string;
  }
}

const indexed: Record<string, ContentDataEntry> = {};

const sortedContent = Object.entries(
  import.meta.glob<GlobEntry>('$content/blog/**/index.svx', { eager: true })
)
  .sort(([, a], [, b]) => {
    return b.metadata.date === a.metadata.date ? 0 : b.metadata.date > a.metadata.date ? 1 : -1
  });

const content = sortedContent.map(([, post], index) => {
  const { date, ...metadata } = post.metadata;
  const dateInstance = new Date(date);
  const contentData: ContentDataEntry = {
    meta: {
      date,
      dateInstance,
      dateFormatted: dateInstance.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }),
      ...metadata
    },
    slug: metadata.slug,
    page: {
      previous: index > 0 ? sortedContent[index - 1][1].metadata.slug : null,
      next: (index + 1) < sortedContent.length ? sortedContent[index + 1][1].metadata.slug : null,
    }
  };

  indexed[contentData.slug] = contentData;

  return contentData;
});

export const blog = content;

export function meta(slug: string) {
  return bySlug(slug).meta;
}

export function bySlug(slug: string) {
  return indexed[slug];
}
