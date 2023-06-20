import type { SvelteComponentTyped } from 'svelte';
import type { ReadTimeResults } from 'reading-time';

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

type BlogGlobEntry = {
  metadata: BlogContentMetadata;
  default: SvelteComponentTyped;
};

interface ExperienceContentMetadata {
  title: string;
  description: string;
  company: string;
  from: string;
  to: string;
  tech: string;
  component: SvelteComponentTyped;
}

type ExperienceGlobEntry = {
  metadata: ExperienceContentMetadata;
  default: SvelteComponentTyped;
};

export interface BlogContentDataEntry {
  slug: string;
  meta: Omit<BlogContentMetadata, 'slug'> & {
    dateFormatted: string;
    dateInstance: Date;
  };
  // component: ConstructorOfATypedSvelteComponent;
  page: {
    next: null | string;
    previous: null | string;
  }
}

interface DateInfo {
    dateInstance: Date;
    dateFormatted: string;
}

interface DatesInfo {
  formatted: string;
  fromInfo: DateInfo;
  toInfo: DateInfo;
}

export interface ExperienceContentDataEntry {
  meta: Omit<ExperienceContentMetadata, 'tech'> & {
    tech: string[];
    dates: DatesInfo;
  };
}

const indexedBlog: Record<string, BlogContentDataEntry> = {};

const sortedBlogContent = Object.entries(
    import.meta.glob<BlogGlobEntry>('$content/blog/**/index.svx', { eager: true })
)
    .sort(([, a], [, b]) => {
      return b.metadata.date === a.metadata.date ? 0 : b.metadata.date > a.metadata.date ? 1 : -1
    });

const sortedExperienceContent = Object.entries(
    import.meta.glob<ExperienceGlobEntry>('$content/experience/*.svx', { eager: true })
);

const monthMap: Record<string, string> = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
};

function shortToDateInfo(short: string): DateInfo {
    const [year, month] = short ? short.split('-') : '';
    const dateInstance = short ? new Date(+year, (+month) - 1) : new Date;
    
    return {
        dateInstance,
        dateFormatted: short ? `${monthMap[month.padStart(2, '0')]} ${year}` : 'Present'
    }
}

function shortsToDateInfo(fromShort: string, toShort: string): DatesInfo {
  const fromInfo = shortToDateInfo(fromShort);
  const toInfo = shortToDateInfo(toShort);

  return {
    // Feb 2012 - Present (11 years 5 months)
    formatted: `${fromInfo.dateFormatted} - ${toInfo.dateFormatted} (${getDateDiffString(fromInfo.dateInstance, toInfo.dateInstance)})`,
    fromInfo,
    toInfo, 
  }
}

function getDateDiffString(fromDate: Date, toDate: Date): string {
  const yearDiff = toDate.getFullYear() - fromDate.getFullYear();
  const monthDiff = toDate.getMonth() - fromDate.getMonth();

  let totalMonths = yearDiff * 12 + monthDiff;

  if (toDate.getDate() >= fromDate.getDate()) {
    totalMonths++;
  }

  let yearCount = Math.floor(totalMonths / 12);
  let monthCount = totalMonths % 12;

  if (yearCount === 0 && monthCount === 0) {
    return 'Less than a month';
  }

  let diffString = '';

  if (yearCount > 0) {
    diffString += `${yearCount} year${yearCount > 1 ? 's' : ''}`;
  }

  if (monthCount > 0) {
    diffString += `${diffString ? ' ' : ''}${monthCount} month${monthCount > 1 ? 's' : ''}`;
  }

  return diffString;
}

const experienceContent: ExperienceContentDataEntry[] = sortedExperienceContent.map(([, data], index) => {
  const { from, tech, to, ...metadata} = data.metadata;
  
  return {
    meta: {
      ...metadata,
      tech: tech ? tech.split(',') : [],
      dates: shortsToDateInfo(from, to),
      from,
      component: data.default.render().html,
      to,
      // dateFormatted: dateInstance.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }),
    },
  };
}).sort((a, b) =>
    b.meta.dates.toInfo.dateInstance.getTime() - a.meta.dates.toInfo.dateInstance.getTime()
);

const blogContent = sortedBlogContent.map(([, post], index) => {
  const { date, ...metadata } = post.metadata;
  const dateInstance = new Date(date);
  const contentData: BlogContentDataEntry = {
    meta: {
      date,
      dateInstance,
      dateFormatted: dateInstance.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }),
      ...metadata
    },
    slug: metadata.slug,
    page: {
      previous: index > 0 ? sortedBlogContent[index - 1][1].metadata.slug : null,
      next: (index + 1) < sortedBlogContent.length ? sortedBlogContent[index + 1][1].metadata.slug : null,
    }
  };

  indexedBlog[contentData.slug] = contentData;

  return contentData;
});

export const blog = blogContent;
export const experience = experienceContent;

export function meta(slug: string) {
  return bySlug(slug).meta;
}

export function bySlug(slug: string) {
  return indexedBlog[slug];
}
