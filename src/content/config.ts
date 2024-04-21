import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const shows = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    showDate: z.coerce.date(),

    director: z.string(),
    company: z.string(),

    roles: z.array(z.string()),
  }),
});

export const collections = {
  blog: blog,
  shows: shows,
};
