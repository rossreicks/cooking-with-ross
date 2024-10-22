import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  schema: z.object({
    title: z.string(),
    prep_time: z.string(),
    cook_time: z.string(),
    tags: z.array(z.string()),
    servings: z.number().or(z.string())
  }),
});

export const collections = { recipes };
