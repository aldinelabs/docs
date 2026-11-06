import path from 'node:path';

/** Directory names in the repository and the URL prefix of each language. */
const prefix = { 'zh-CN': 'zh', en: 'en' };

/**
 * Pages link to each other as Markdown files so they also work on GitHub
 * (`../en/getting-started.md#anchor`). On the site they become page URLs.
 *
 * @param {any} node
 * @param {string} from
 */
function walk(node, from) {
	if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
		const href = node.properties.href;
		if (!/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(href)) {
			const [file, hash] = href.split('#');
			if (file.endsWith('.md')) {
				const relative = path.relative(process.cwd(), path.resolve(path.dirname(from), file));
				const [product, dir, ...rest] = relative.split(path.sep);
				if (product && prefix[dir] && rest.length) {
					// `group/index.md` is the page of the group itself, `group/`.
					const slug = rest.join('/').replace(/\.md$/, '').replace(/(^|\/)index$/, '');
					node.properties.href = `/${prefix[dir]}/${product}/${slug ? `${slug}/` : ''}${hash ? `#${hash}` : ''}`;
				}
			}
		}
	}
	for (const child of node.children ?? []) walk(child, from);
}

export default function rehypeMdLinks() {
	return (/** @type {any} */ tree, /** @type {any} */ file) => {
		if (file.path) walk(tree, file.path);
	};
}
