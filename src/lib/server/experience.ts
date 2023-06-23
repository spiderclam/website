import type { SvelteComponentTyped } from 'svelte';
import type { DateInfo, GlobEntry } from './content';

interface ExperienceContentMetadata {
  title: string;
  description: string;
  company: string;
  from: string;
  to: string;
  tech: string;
  component: SvelteComponentTyped;
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

export const monthMap: Record<string, string> = {
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

export function shortToDateInfo(short: string): DateInfo {
  const [year, month] = short ? short.split('-') : '';
  const dateInstance = short ? new Date(+year, (+month) - 1) : new Date;

  return {
    dateInstance,
    dateFormatted: short ? `${monthMap[month.padStart(2, '0')]} ${year}` : 'Present'
  }
}

export function shortsToDateInfo(fromShort: string, toShort: string): DatesInfo {
  const fromInfo = shortToDateInfo(fromShort);
  const toInfo = shortToDateInfo(toShort);

  return {
    formatted: `${fromInfo.dateFormatted} - ${toInfo.dateFormatted} (${getDateDiffString(fromInfo.dateInstance, toInfo.dateInstance)})`,
    fromInfo,
    toInfo,
  }
}

const sortedExperienceContent = Object.entries(
  import.meta.glob<GlobEntry<ExperienceContentMetadata>>('$content/experience/*.svx', { eager: true })
);

function getDateDiffString(fromDate: Date, toDate: Date): string {
  const yearDiff = toDate.getFullYear() - fromDate.getFullYear();
  const monthDiff = toDate.getMonth() - fromDate.getMonth();
  const totalMonths = yearDiff * 12 + monthDiff;
  const yearCount = Math.floor(totalMonths / 12);
  const monthCount = totalMonths % 12;

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
  const { from, tech, to, ...metadata } = data.metadata;

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

export const experience = experienceContent;
