import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages live at `<product>/<zh-CN|en>/<page>.md`, next to the images in `<product>/images/`.
const docs = defineCollection({
	loader: glob({ base: '.', pattern: '[a-z]*/{zh-CN,en}/**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Position in the product's sidebar; lower comes first. */
		order: z.number().default(100),
	}),
});

export const collections = { docs };
