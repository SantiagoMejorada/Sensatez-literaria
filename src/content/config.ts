import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		author: z.string().optional(),
		authorImage: z.string(),
		image: z.string().optional(),
		date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		labels: z.array(z.string()).optional()
	}),
});

const escritos = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		authorImage: z.string(),
		image: z.string(),
		date: z.string(),
		justify: z.boolean().optional()
	}),
});

const resenas = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		authorImage: z.string(),
		image: z.string(),
		date: z.coerce.date().optional(),
		labels: z.array(z.string()).optional()
	}),
});

export const collections = { blog, escritos, resenas };
