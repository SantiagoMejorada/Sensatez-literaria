import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		authorImage: z.string(),
		image: z.string(),
		textImage: z.string(),
		date: z.string(),
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
		textImage: z.string(),
		date: z.string(),
		labels: z.array(z.string()).optional()
	}),
});

export const collections = { blog, escritos, resenas };
