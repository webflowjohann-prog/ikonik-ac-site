import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:        z.string(),
    slug:         z.string(),
    category:     z.string(),
    tags:         z.array(z.string()).default([]),
    excerpt:      z.string(),
    color:        z.string().optional(),
    author:       z.string().default('IKONIK'),
    date:         z.string(),
    read_time:    z.number(),
  }),
});

export const collections = { blog };
