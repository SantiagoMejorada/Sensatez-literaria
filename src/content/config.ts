import { defineCollection, z } from 'astro:content';

const contenido = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		image: z.string(),
		date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		labels: z.array(z.string()).optional()
	}),
});

export const collections = { contenido };
