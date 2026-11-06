import type { Locale } from '@aldine/ui/i18n';

/** Products with documentation. The key is the folder name in the repository and the URL segment. */
export const products: Record<string, { name: string; description: Record<Locale, string> }> = {
	pine: {
		name: 'Pine',
		description: {
			en: 'An agent workspace dedicated to expanding possibilities for everyone.',
			zh: '致力于为所有人提供更多可能性的 AI 代理工作区。',
		},
	},
};
