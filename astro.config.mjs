// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeAlerts from '@aldine/ui/plugins/rehype-alerts.mjs';
import rehypeMdLinks from './src/plugins/rehype-md-links.mjs';

export default defineConfig({
	site: process.env.SITE_URL || 'http://localhost:4321',
	output: 'static',
	trailingSlash: 'ignore',
	integrations: [
		sitemap({
			i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN' } },
			// The root only sends visitors to their locale; it is not a page.
			filter: (page) => new URL(page).pathname !== '/',
		}),
	],
	markdown: {
		rehypePlugins: [rehypeAlerts, rehypeMdLinks],
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: false,
		},
	},
	vite: { plugins: [tailwindcss()] },
});
