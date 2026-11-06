import { localize, type Locale } from '@aldine/ui/i18n';
import { products } from './products';
import { ui } from './lib/strings';

/** Brand files stay on the main site; this repository does not ship them. */
const MAIN = 'https://aldine.cn';

export const brand = {
	logo: { light: `${MAIN}/brand/logo-dark.svg`, dark: `${MAIN}/brand/logo-light.svg` },
	icons: { light: `${MAIN}/favicon.svg`, dark: `${MAIN}/brand/favicon-dark.svg` },
	image: `${MAIN}/brand/share-light.png`,
};

const CONTACT = { github: 'https://github.com/aldinelabs', x: 'https://x.com/aldinelabs', email: 'inbound@aldine.cn' };

export const organization = {
	name: 'Aldine Labs',
	alternateName: 'Aldine',
	logo: brand.logo.dark,
	email: CONTACT.email,
	github: CONTACT.github,
	twitter: CONTACT.x,
};

/** The same entries as the main site's header, plus this site; they point at the main site. */
export function nav(locale: Locale) {
	const text = ui[locale];
	return [
		{ href: `${MAIN}/${locale}/trutina/`, label: 'Trutina' },
		{ href: `${MAIN}/${locale}/pine/`, label: 'Pine' },
		{ href: `${MAIN}/${locale}/journal/`, label: text.journal },
		{ href: `/${locale}/`, label: text.docs, active: true },
	];
}

export const homeHref = (locale: Locale) => `${MAIN}/${locale}/`;

export function footer(locale: Locale) {
	const text = ui[locale];
	return {
		org: 'Aldine Labs',
		icp: { number: '沪ICP备2026052918号', href: 'https://beian.miit.gov.cn/' },
		logo: brand.logo,
		columns: [
			{ title: text.products, links: Object.entries(products).map(([id, p]) => ({ href: localize(`/${id}/`, locale), label: p.name })) },
			{
				title: text.company,
				links: [
					{ href: `${MAIN}/${locale}/`, label: text.aldine },
					{ href: CONTACT.github, label: text.github },
					{ href: '/sitemap-index.xml', label: locale === 'zh' ? '站点地图' : 'Sitemap' },
				],
			},
		],
		contacts: [
			{ href: CONTACT.github, label: 'aldinelabs', name: 'GitHub', icon: 'github' as const },
			{ href: CONTACT.x, label: '@aldinelabs', name: 'X', icon: 'x' as const },
			{ href: `mailto:${CONTACT.email}`, label: CONTACT.email, name: 'Email', icon: 'mail' as const },
		],
	};
}
