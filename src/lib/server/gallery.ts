import path from 'path';
import type { GlobEntry } from './content';
import { type BaseContentDataEntry, buildPagedContent } from './content';

/*
 * Metadata collected from .svx files.
 */
interface GalleryMetadata {
	slug: string;
	title: string;
	generated: boolean;
	description: string;
	thumbnail: string;
	og: string;
	images: string[];
	date: string;
}

/*
 * Data entry for gallery content.
 */
export type GalleryContentDataEntry = BaseContentDataEntry<{}>;

// Make an index of all images used in the gallery. Allows for fuzzy definitions in svx files.
// Must be literal.
const thumbs = import.meta.glob(`$content/gallery/**/*.(png|jpg|jpeg|webp)`, {
	eager: false,
	query: { format: 'webp', w: 640, h: 428 }
});

const ogs = import.meta.glob(`$content/gallery/**/*.(png|jpg|jpeg|webp)`, {
	eager: false,
	query: { format: 'webp', w: 1200, h: 630 }
});

const images: Record<string, GlobEntry<any>> = import.meta.glob(`$content/gallery/**/*.(png|jpg|jpeg|webp)`, {
	eager: true,
});

const imagesIndex: Record<string, GlobEntry<GalleryMetadata>[]> = {};

for (const imagesKey in images) {
	const name = imagesKey.match(/^\/src\/content\/gallery\/([^/]+)\//)?.[1] ?? null;

	if (name === null) {
		throw new Error(`Could not parse gallery name from path: ${imagesKey}`);
	}

	if (!Array.isArray(imagesIndex[name])) imagesIndex[name] = [];

	imagesIndex[name].push(images[imagesKey].default as any);
}

export const gallery = buildPagedContent<GalleryMetadata>(
	import.meta.glob<GlobEntry<GalleryMetadata>>('$content/gallery/**/index.svx', { eager: true }),
	async (data, [file], table) => {
		const imageKey = path.join(path.parse(file).dir, data.meta.thumbnail);
		const [thumb, og] = [
			await thumbs[imageKey]() as GlobEntry<any>,
			await ogs[imageKey]() as GlobEntry<any>,
		];

		return {
			thumbnail: thumb.default,
			og: og.default,
			images: imagesIndex[data.slug],
		};
	}
);
