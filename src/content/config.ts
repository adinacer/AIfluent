import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string(),
    category: z.enum(['guide', 'tutorial', 'ai-daily', 'case-study']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
