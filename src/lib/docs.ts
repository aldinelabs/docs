import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@aldine/ui/i18n';

/** Folder name in the repository -> URL prefix. */
const localeOfDir: Record<string, Locale> = { 'zh-CN': 'zh', en: 'en' };

export interface Doc {
	entry: CollectionEntry<'docs'>;
	product: string;
	locale: Locale;
	slug: string;
	title: string;
	description: string;
	order: number;
	/** Path in the repository, for the edit link. */
	source: string;
}

export const docUrl = (locale: Locale, product: string, slug: string) => `/${locale}/${product}/${slug}/`;

export async function getDocs(): Promise<Doc[]> {
	const entries = await getCollection('docs');
	return entries.map((entry) => {
		const source = entry.filePath ?? '';
		const [product, dir, ...rest] = source.split('/');
		return {
			entry,
			product,
			locale: localeOfDir[dir],
			// `group/page.md` -> `group/page`; `group/index.md` is the group's own page, `group`.
			slug: rest.join('/').replace(/\.md$/, '').replace(/(^|\/)index$/, ''),
			title: entry.data.title,
			description: entry.data.description,
			order: entry.data.order,
			source,
		};
	});
}

const byOrder = (a: Doc, b: Doc) => a.order - b.order || a.slug.localeCompare(b.slug);

export interface TreeNode {
	doc: Doc;
	/** Pages inside the group (`group/page`), in order. */
	children: Doc[];
}

/**
 * The page tree of one product in one language: top-level pages and groups (a folder with an
 * `index.md`), each group with its pages.
 */
export function treeOf(docs: Doc[], product: string, locale: Locale): TreeNode[] {
	const own = docs.filter((d) => d.product === product && d.locale === locale);
	return own
		.filter((d) => !d.slug.includes('/'))
		.sort(byOrder)
		.map((doc) => ({ doc, children: own.filter((d) => d.slug.startsWith(`${doc.slug}/`)).sort(byOrder) }));
}

/** Every page of a product in reading order: a group's own page, then its pages. */
export function pagesOf(docs: Doc[], product: string, locale: Locale): Doc[] {
	return treeOf(docs, product, locale).flatMap((node) => [node.doc, ...node.children]);
}

/** The group a page belongs to: its own page for a group, the parent for a page inside one. */
export const groupSlug = (slug: string) => slug.split('/')[0];
