import type { SvelteComponentTyped } from 'svelte';

export interface BaseContentDataEntry {
	slug: string;
	meta: Record<string, any>;
	page: {
		next: null | string;
		previous: null | string;
	};
}

export type GlobEntry<T> = {
	metadata: T;
	default: SvelteComponentTyped;
};

export function sortedEntries(imported: Record<string, GlobEntry<any>>) {
	return Object.entries(imported).sort(([, a], [, b]) => {
		return b.metadata.date === a.metadata.date ? 0 : b.metadata.date > a.metadata.date ? 1 : -1;
	});
}

export class ContentTable<T extends { slug: string }> {
	private _index: Record<string, T> = {};

	constructor(private _data: T[] = []) {
	}

	get content(): T[] {
		return this._data;
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

type BuildCallback<T extends BaseContentDataEntry, G extends any> = (contentData: T, entry: [fileName: string, entry: GlobEntry<G>]) => void;

/**
 * Build a table of paged content from a glob import. Comes with convenience methods for lookups (indexed by slug).
 */
export function buildPagedContent<T extends BaseContentDataEntry, K = any>(content: Record<string, GlobEntry<K>>, customMetaCallback: BuildCallback<T, K>) {
	const sortedContent = sortedEntries(content);
	const table = new ContentTable<T>();
	const pagedContent: T[] = sortedContent.map(([file, data], index) => {
		const { slug, ...metadata } = data.metadata;
		const contentData: T = {
			slug,
			meta: {
				...metadata
			},
			page: {
				previous: index > 0 ? sortedContent[index - 1][1].metadata.slug : null,
				next: (index + 1) < sortedContent.length ? sortedContent[index + 1][1].metadata.slug : null
			}
		} as any;

		Object.assign(contentData.meta, customMetaCallback(contentData, [file, data]));

		table.index(contentData);

		return contentData;
	});

	table.setData(pagedContent);

	return table;
}
