import type { SvelteComponentTyped } from 'svelte';

export interface BaseContentDataEntry<T = Record<string, unknown>> {
	slug: string;
	meta: Omit<T, 'slug'> & { date: DateInfo };
	page: {
		next: null | string;
		previous: null | string;
	};
}

export type GlobEntry<T> = {
	metadata: T;
	default: SvelteComponentTyped;
};

export interface DateInfo {
	date: string;
	dateInstance: Date;
	dateFormatted: string;
}

export function sortedEntries(imported: Record<string, GlobEntry<any>>) {
	return Object.entries(imported).sort(([, a], [, b]) => {
		return b.metadata.date === a.metadata.date ? 0 : b.metadata.date > a.metadata.date ? 1 : -1;
	});
}

export class ContentTable<T extends { slug: string }> {
	private _index: Record<string, T> = {};

	private _loading: Promise<any>[] = [];

	constructor(private _data: T[] = []) {
	}

	get content() {
		return Promise.all(this._loading).then(() => this._data);
	}

	public load(x: Promise<any>) {
		this._loading.push(x);
		
		x.then(() => {
			const index = this._loading.indexOf(x);
			if (index !== -1) {
				this._loading.splice(index, 1);
			}
		})
	}

	public index(entry: T) {
		this._index[entry.slug] = entry;
	}

	public lookup(slug: string): T {
		return this._index[slug] || null;
	}

	setData(pagedContent: T[]) {
		this._data = pagedContent;
	}
}

type BuildCallback<T extends BaseContentDataEntry, G = unknown> = (contentData: T, entry: [fileName: string, entry: GlobEntry<G>], table: ContentTable<T>) => Promise<any>;

/**
 * Build a table of paged content from a glob import. 
 * Comes with convenience methods for lookups (indexed by slug).
 * 
 * Requires a date to be present. Used for sorting.
 */
export function buildPagedContent<MetaType = unknown, T extends BaseContentDataEntry = BaseContentDataEntry<MetaType>>(
	content: Record<string, GlobEntry<MetaType>>,
	customMetaCallback?: BuildCallback<T, MetaType>
) {
	const sortedContent = sortedEntries(content);
	const table = new ContentTable<T>();
	const pagedContent: T[] = sortedContent.map(([file, data], index) => {
		const { slug, ...metadata } = data.metadata;
		const dateInstance = new Date(metadata.date);
		const contentData: T = {
			slug,
			meta: {
				...metadata,
				date: {
					date: metadata.date,
					dateInstance,
					dateFormatted: dateInstance.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }),
				},
			},
			page: {
				previous: index > 0 ? sortedContent[index - 1][1].metadata.slug : null,
				next: (index + 1) < sortedContent.length ? sortedContent[index + 1][1].metadata.slug : null
			}
		} as any;

		if (typeof customMetaCallback === 'function') {
			const additionalMeta = customMetaCallback(contentData, [file, data], table);
			
			if (typeof additionalMeta.then === 'function') {
				table.load(additionalMeta.then(meta => Object.assign(contentData.meta, meta)));
			} else {
				Object.assign(contentData.meta, additionalMeta);	
			}
		}

		table.index(contentData);

		return contentData;
	});

	table.setData(pagedContent);

	return table;
}
