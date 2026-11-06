// Checks the Markdown pages before a build: every page exists in both languages with the same
// sections, and every relative link and image points at a file that exists.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const languages = ['zh-CN', 'en'];
const problems = [];

const products = readdirSync('.').filter(
	(name) => /^[a-z]/.test(name) && !['node_modules', 'dist', 'src', 'scripts', 'public'].includes(name) && languages.some((l) => existsSync(path.join(name, l))),
);

const headings = (text) => text.split('\n').filter((line) => /^#{1,6} /.test(line)).length;

/** Every file under `dir` as a path relative to it. */
const walk = (dir) => readdirSync(dir).flatMap((n) => (statSync(path.join(dir, n)).isDirectory() ? walk(path.join(dir, n)).map((f) => path.join(n, f)) : [n]));

for (const product of products) {
	const pages = Object.fromEntries(languages.map((l) => [l, existsSync(path.join(product, l)) ? walk(path.join(product, l)).filter((f) => f.endsWith('.md')) : []]));
	for (const l of languages) {
		const other = languages.find((x) => x !== l);
		for (const file of pages[l]) {
			if (!pages[other].includes(file)) problems.push(`${product}/${l}/${file}: missing the ${other} version`);
		}
	}
	const used = new Set();
	for (const l of languages) {
		for (const file of pages[l]) {
			const full = path.join(product, l, file);
			const text = readFileSync(full, 'utf8');
			if (!/^---\ntitle: .+\ndescription: .+\n/.test(text)) problems.push(`${full}: needs title and description in the front matter`);
			// A folder needs an index.md: it is the group's own page.
			const twin = path.join(product, languages.find((x) => x !== l), file);
			if (l === 'zh-CN' && existsSync(twin) && headings(text) !== headings(readFileSync(twin, 'utf8')))
				problems.push(`${full}: heading count differs from ${twin}`);
			// Links and images written as (path) or (path#anchor), skipping URLs and pure anchors.
			for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
				if (/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(target)) continue;
				const file2 = target.split('#')[0];
				const resolved = path.join(path.dirname(full), decodeURI(file2));
				if (file2 && !existsSync(resolved)) problems.push(`${full}: broken link ${target}`);
				if (resolved.startsWith(path.join(product, 'images') + path.sep)) used.add(path.relative(path.join(product, 'images'), resolved));
			}
		}
	}
	for (const l of languages) {
		const dirs = new Set(pages[l].map((f) => path.dirname(f)).filter((d) => d !== '.'));
		for (const d of dirs) if (!pages[l].includes(path.join(d, 'index.md'))) problems.push(`${product}/${l}/${d}: folder has no index.md`);
	}
	const images = path.join(product, 'images');
	if (existsSync(images)) {
		for (const rel of walk(images)) if (!used.has(rel)) problems.push(`${path.join(images, rel)}: image is not used by any page`);
	}
}

if (problems.length) {
	console.error(problems.map((p) => `- ${p}`).join('\n'));
	process.exit(1);
}
console.log(`Content OK (${products.join(', ')}).`);
