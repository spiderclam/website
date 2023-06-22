import path from 'path';
import type { GlobEntry } from './content';
import { buildPagedContent } from './content';

/*
 * Metadata collected from .svx files.
 */
interface GalleryMetadata {
	slug: string;
	title: string;
	generated: boolean;
	description: string;
	thumbnail: string;
	images: string[];
	date: string;
}

/*
 * Data entry for gallery content.
 */
export interface GalleryContentDataEntry {
	slug: string;
	meta: Omit<GalleryMetadata, 'slug'>;
	page: {
		next: null | string;
		previous: null | string;
	};
}

// Make an index of all images used in the gallery. Allows for fuzzy definitions in svx files.
// Must be literal.
const thumbs: Record<string, GlobEntry<any>> = import.meta.glob(`$content/gallery/**/*.(png|jpg|jpeg|webp)`, {
	eager: true,
	query: { format: 'webp', w: 640, h: 428 }
});

const images: Record<string, GlobEntry<any>> = import.meta.glob(`$content/gallery/**/*.(png|jpg|jpeg|webp)`, {
	eager: true,
});

const imagesIndex: Record<string, GlobEntry<GalleryMetadata>[]> = {};

for (let imagesKey in images) {
	const name = imagesKey.match(/^\/src\/content\/gallery\/([^/]+)\//)?.[1] ?? null;
	
	if (name === null) {
		throw new Error(`Could not parse gallery name from path: ${imagesKey}`);
	}
	
	if (!Array.isArray(imagesIndex[name])) imagesIndex[name] = [];

	imagesIndex[name].push(images[imagesKey].default as any);
}

// @todo add support for `generated` metadata. Should send along all images in the gallery for automatic page generation.
export const gallery = buildPagedContent<GalleryContentDataEntry>(
	import.meta.glob<GlobEntry<GalleryMetadata>>('$content/gallery/**/index.svx', { eager: true }),
	(data, [file]) => {
		return {
			thumbnail: (thumbs[path.join(path.parse(file).dir, data.meta.thumbnail)]).default,
			images: imagesIndex[data.slug],
		};
	}
);
