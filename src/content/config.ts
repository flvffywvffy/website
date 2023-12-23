// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const portfolioCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    author: z.string().optional(),
    group: z.string().optional(),
    showDates: z.string(),
    director: z.string(),
    roles: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': portfolioCollection,
};